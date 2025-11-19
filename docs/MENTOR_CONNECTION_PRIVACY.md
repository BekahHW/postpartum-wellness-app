# Mentor Connection Privacy Implementation Guide

## Overview

The Mentor Connection feature is designed to connect users with non-judgmental postpartum support mentors while **protecting the user's privacy** by hiding their phone number.

## Current Implementation Status

### ✅ Completed
- UI/UX for Mentor Connection screen
- Privacy messaging and user consent flow
- Call initiation interface
- Emergency fallback to direct helplines

### ❌ Not Yet Implemented (Critical)
- **Backend service to proxy calls and hide user phone numbers**
- Mentor matching system
- Call recording/monitoring for quality assurance
- Mentor availability tracking

## Privacy Promise

The app makes a critical promise to users:

> "Your phone number will not be shared or stored"

This cannot be achieved with the current client-side implementation. **Backend infrastructure is required.**

---

## Why Client-Side Isn't Enough

### Current Code (screens/MentorConnectionScreen.tsx):
```javascript
const MENTOR_SUPPORT_LINE = 'tel:+18002738255'; // PSI Helpline
Linking.openURL(MENTOR_SUPPORT_LINE);
```

**Problem:** This directly dials from the user's phone, exposing their number to the receiving party.

---

## Required Backend Architecture

### Architecture Overview

```
User's Phone          Backend Service          Mentor's Phone
    |                       |                         |
    |---(1) Request call--->|                         |
    |                       |---(2) Call user-------->|
    |<--(3) Answer----------|                         |
    |                       |---(4) Bridge to mentor->|
    |<------------------(5) Connected---------------->|
```

**Key Points:**
- User sees a local or Twilio number, not mentor's number
- Mentor sees Twilio number, not user's number
- Both numbers stay private

---

## Implementation Options

### Option 1: Twilio (Recommended for MVP)

**Pros:**
- Easiest to implement
- Reliable and scalable
- Good documentation
- HIPAA compliant option available

**Cons:**
- Recurring costs (~$0.013/min)
- Requires Twilio account

#### Setup Steps

1. **Install Dependencies**
```bash
npm install twilio
```

2. **Create Twilio Account**
- Sign up at twilio.com
- Get Account SID and Auth Token
- Purchase a phone number ($1/month)

3. **Create Backend API Endpoint**

```javascript
// functions/connectMentor.js (AWS Lambda example)
const twilio = require('twilio');

exports.handler = async (event) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

  const client = twilio(accountSid, authToken);
  const { userPhoneNumber } = JSON.parse(event.body);

  try {
    // Call user first
    const call = await client.calls.create({
      url: `${process.env.API_URL}/twiml/connect-mentor`,
      to: userPhoneNumber,
      from: twilioNumber,
      statusCallback: `${process.env.API_URL}/call-status`,
      statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        callSid: call.sid,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
```

4. **Create TwiML Endpoint**

```javascript
// functions/twiml/connectMentor.js
const twilio = require('twilio');

exports.handler = async (event) => {
  const response = new twilio.twiml.VoiceResponse();

  response.say(
    'Please wait while we connect you to a postpartum support mentor.',
    { voice: 'alice' }
  );

  // Get available mentor number from database
  const mentorNumber = await getAvailableMentor();

  // Dial mentor
  const dial = response.dial({
    callerId: process.env.TWILIO_PHONE_NUMBER,
  });
  dial.number(mentorNumber);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/xml' },
    body: response.toString(),
  };
};
```

5. **Update React Native App**

```javascript
// screens/MentorConnectionScreen.tsx
const handleConnectToMentor = async () => {
  try {
    // Get user's auth token
    const token = await Auth.currentSession();

    // Call backend API
    const response = await fetch(`${API_URL}/connect-mentor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.getAccessToken().getJwtToken()}`,
      },
      body: JSON.stringify({
        userPhoneNumber: user.phoneNumber,
      }),
    });

    if (response.ok) {
      Alert.alert(
        'Call Initiated',
        'You will receive a call from our support line shortly. Please answer to be connected with a mentor.',
        [{ text: 'OK' }]
      );
    }
  } catch (error) {
    Alert.alert('Connection Error', 'Please try again or call 988 for immediate help.');
  }
};
```

---

### Option 2: In-App Voice Calling

**Use Twilio Voice SDK for in-app calls**

**Pros:**
- No phone number needed from user
- Better privacy control
- Can add features like call recording, transcription

**Cons:**
- More complex to implement
- Requires app permissions for microphone
- Data usage concerns

#### Setup Steps

1. **Install Twilio Voice SDK**
```bash
expo install @twilio/voice-react-native-sdk
```

2. **Request Permissions**
```javascript
import { Audio } from 'expo-av';

await Audio.requestPermissionsAsync();
```

3. **Generate Access Token (Backend)**
```javascript
const AccessToken = require('twilio').jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;

const voiceGrant = new VoiceGrant({
  outgoingApplicationSid: process.env.TWIML_APP_SID,
  incomingAllow: true,
});

const token = new AccessToken(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_API_KEY,
  process.env.TWILIO_API_SECRET,
  { identity: userId }
);

token.addGrant(voiceGrant);
return token.toJwt();
```

4. **Make Call (React Native)**
```javascript
import { TwilioVoice } from '@twilio/voice-react-native-sdk';

const token = await fetch(`${API_URL}/voice-token`).then(r => r.text());
TwilioVoice.connect(token, { To: 'mentor-queue' });
```

---

## Mentor Matching System

### Database Schema

```sql
CREATE TABLE mentors (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  phone_number VARCHAR(20) ENCRYPTED,
  specialties TEXT[],
  available BOOLEAN DEFAULT true,
  current_calls INT DEFAULT 0,
  max_concurrent_calls INT DEFAULT 1,
  languages TEXT[],
  created_at TIMESTAMP
);

CREATE TABLE mentor_availability (
  mentor_id UUID REFERENCES mentors(id),
  day_of_week INT,
  start_time TIME,
  end_time TIME,
  timezone VARCHAR(50)
);

CREATE TABLE call_logs (
  id UUID PRIMARY KEY,
  user_id UUID,
  mentor_id UUID,
  call_sid VARCHAR(255),
  started_at TIMESTAMP,
  ended_at TIMESTAMP,
  duration_seconds INT,
  status VARCHAR(50)
);
```

### Mentor Selection Algorithm

```javascript
async function getAvailableMentor(userPreferences = {}) {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const currentTime = now.toTimeString().slice(0, 8);

  // Query available mentors
  const mentor = await db.query(`
    SELECT m.phone_number
    FROM mentors m
    JOIN mentor_availability ma ON m.id = ma.mentor_id
    WHERE m.available = true
      AND m.current_calls < m.max_concurrent_calls
      AND ma.day_of_week = $1
      AND ma.start_time <= $2
      AND ma.end_time >= $2
    ORDER BY m.current_calls ASC, RANDOM()
    LIMIT 1
  `, [dayOfWeek, currentTime]);

  if (!mentor) {
    // Fallback to crisis hotline
    return process.env.FALLBACK_CRISIS_NUMBER;
  }

  return mentor.phone_number;
}
```

---

## Privacy & Security Measures

### 1. Phone Number Encryption
```javascript
// Use AWS KMS or similar
const AWS = require('aws-sdk');
const kms = new AWS.KMS();

async function encryptPhoneNumber(phoneNumber) {
  const params = {
    KeyId: process.env.KMS_KEY_ID,
    Plaintext: phoneNumber,
  };
  const { CiphertextBlob } = await kms.encrypt(params).promise();
  return CiphertextBlob.toString('base64');
}
```

### 2. Audit Logging
```javascript
await logEvent({
  type: 'MENTOR_CALL_INITIATED',
  userId: hashedUserId,
  timestamp: new Date(),
  callSid: call.sid,
  // NO phone numbers stored
});
```

### 3. Data Retention Policy
- Call logs: Keep for 90 days, then anonymize
- Phone numbers: Never stored in plain text
- Recordings (if any): Encrypted, auto-delete after 30 days

### 4. HIPAA Compliance
- Sign Twilio BAA
- Use AWS HIPAA-eligible services
- Encrypt all data in transit (TLS) and at rest
- Implement access controls and audit logs

---

## Testing the Implementation

### Test Scenarios

1. **Happy Path**
   - User requests mentor connection
   - User receives call from system
   - User is connected to available mentor
   - Numbers stay private

2. **No Mentors Available**
   - User requests connection
   - No mentors online
   - System provides fallback option (crisis hotline)

3. **Call Quality Issues**
   - Monitor for dropped calls
   - Automatic reconnection
   - Fallback to direct helpline

4. **Privacy Verification**
   - Verify user number not exposed to mentor
   - Verify mentor number not exposed to user
   - Confirm no numbers stored in logs

### Testing Tools

```bash
# Test Twilio webhook
curl -X POST https://your-api.com/twiml/connect-mentor \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "CallSid=CAxxxxx" \
  -d "From=%2B15551234567"

# Verify call was placed
twilio api:core:calls:list

# Check call recording (if enabled)
twilio api:core:recordings:list --call-sid CAxxxxx
```

---

## Cost Estimation

### Twilio Pricing (US)
- Phone number: $1/month
- Outbound calls: $0.013/minute
- Inbound calls: $0.0085/minute
- Average call: 15 minutes
- Cost per call: ~$0.20

### Monthly Costs
- 100 calls/month: ~$21
- 500 calls/month: ~$101
- 1000 calls/month: ~$201

**Plus AWS Lambda costs (minimal, ~$5/month)**

---

## Monitoring & Alerts

### Key Metrics to Track
1. Call success rate
2. Average wait time for mentor
3. Call duration
4. Mentor availability %
5. User satisfaction (post-call survey)

### Alerts to Set Up
- No mentors available
- High call failure rate (>5%)
- Unusual call patterns
- Twilio service disruptions

---

## Rollout Plan

### Phase 1: MVP (Week 1-2)
- [ ] Set up Twilio account
- [ ] Implement basic call forwarding
- [ ] Test with 2-3 volunteer mentors
- [ ] Manual mentor selection

### Phase 2: Automation (Week 3-4)
- [ ] Implement mentor database
- [ ] Auto-select available mentor
- [ ] Add call logging
- [ ] Implement fallback logic

### Phase 3: Scale (Month 2)
- [ ] Add multiple mentors
- [ ] Implement scheduling
- [ ] Add call quality monitoring
- [ ] User feedback system

### Phase 4: Enhancement (Month 3+)
- [ ] In-app calling
- [ ] Call recording for quality
- [ ] AI-powered mentor matching
- [ ] Multi-language support

---

## Compliance & Legal

### Required Disclosures
- Calls may be monitored for quality
- Call duration limits (if any)
- Data retention policy
- How to request data deletion

### Terms of Service Updates Needed
- Mentor connection service terms
- Privacy policy for call data
- Disclaimer that mentors aren't therapists
- Emergency services redirect policy

---

## Emergency Fallbacks

Always provide direct access to crisis resources:

```javascript
const EMERGENCY_NUMBERS = {
  crisis: '988', // 988 Suicide & Crisis Lifeline
  emergency: '911',
  psi: '1-800-273-8255', // PSI Helpline
};

function handleMentorConnectionFailure() {
  Alert.alert(
    'Unable to Connect',
    'We couldn\'t connect you to a mentor right now. Would you like to call a crisis hotline instead?',
    [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Call 988',
        onPress: () => Linking.openURL('tel:988'),
      },
    ]
  );
}
```

---

## Questions & Support

For implementation questions:
- Twilio Support: https://support.twilio.com
- AWS Support: https://console.aws.amazon.com/support
- React Native Community: https://reactnative.dev/help

## Next Steps

1. ✅ Review this document
2. ⬜ Choose implementation option (Twilio recommended)
3. ⬜ Set up Twilio account
4. ⬜ Implement backend API
5. ⬜ Test with volunteer mentors
6. ⬜ Security audit
7. ⬜ Launch to limited beta
8. ⬜ Gather feedback and iterate
