# Backend Setup Guide

This document outlines the backend services needed for the Postpartum Wellness App and how to implement them.

## Overview

The app currently has UI implementations for all features, but requires backend services to provide full functionality. This guide covers the essential backend components needed.

## Required Backend Services

### 1. Authentication & User Management

**Recommended:** AWS Amplify Auth or Firebase Authentication

**Features Needed:**
- User registration and login
- Secure password storage
- Session management
- Password reset functionality

**Implementation Steps:**

#### AWS Amplify (Recommended)
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify in your project
amplify init

# Add authentication
amplify add auth

# Choose settings:
# - Default configuration
# - Email sign-in
# - No advanced settings needed for MVP

# Push to AWS
amplify push
```

#### Integration in App
```javascript
// App.tsx
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
```

Update SignInScreen.tsx and SignUpScreen.tsx to use Amplify Auth:
```javascript
import { Auth } from 'aws-amplify';

// Sign up
await Auth.signUp({
  username: email,
  password: password,
});

// Sign in
await Auth.signIn(username, password);
```

---

### 2. Database & Data Storage

**Recommended:** AWS Amplify DataStore or Firebase Firestore

**Data Models Needed:**
1. User Profile
   - name, age, baby's DOB
   - mental health history
   - support system info
   - breastfeeding status

2. Daily Mood Tracking
   - date, mood rating (1-5)
   - notes (optional)

3. Emergency Contacts
   - contact name, phone number
   - relationship

**Implementation Steps:**

#### AWS Amplify DataStore
```bash
# Add API and database
amplify add api

# Choose GraphQL
# Use the schema below

# Push to AWS
amplify push
```

Sample GraphQL Schema (`amplify/backend/api/*/schema.graphql`):
```graphql
type UserProfile @model @auth(rules: [{allow: owner}]) {
  id: ID!
  name: String!
  age: Int
  babyDOB: AWSDate
  mentalHealthHistory: String
  hasSupport: Boolean
  breastfeedingStatus: String
  createdAt: AWSDateTime!
  moodEntries: [MoodEntry] @hasMany
  emergencyContacts: [EmergencyContact] @hasMany
}

type MoodEntry @model @auth(rules: [{allow: owner}]) {
  id: ID!
  date: AWSDate!
  rating: Int!
  notes: String
  userProfileID: ID! @index(name: "byUserProfile")
}

type EmergencyContact @model @auth(rules: [{allow: owner}]) {
  id: ID!
  name: String!
  phoneNumber: String!
  relationship: String
  userProfileID: ID! @index(name: "byUserProfile")
}
```

---

### 3. Mentor Connection Service (Critical for Privacy)

**Recommended:** Twilio or AWS Connect

This is the most critical backend feature for the mentor connection functionality with hidden numbers.

**Why This Matters:**
The app promises to hide the user's phone number when connecting to mentors. This CANNOT be done client-side and requires a backend proxy service.

**Implementation Options:**

#### Option A: Twilio (Easiest)
```bash
npm install twilio
```

Backend API Endpoint Needed:
```javascript
// Lambda function or Express endpoint
const twilio = require('twilio');
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

// POST /api/connect-mentor
exports.handler = async (event) => {
  const { mentorNumber } = JSON.parse(event.body);

  // Create a call from Twilio number to user
  // Then bridge to mentor - user's number never exposed
  const call = await client.calls.create({
    url: 'http://your-domain.com/voice-bridge.xml',
    to: userPhoneNumber,
    from: TWILIO_NUMBER,
  });

  return { statusCode: 200, body: JSON.stringify({ callSid: call.sid }) };
};
```

TwiML for bridging:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial>
    <Number>MENTOR_NUMBER</Number>
  </Dial>
</Response>
```

**Cost:** ~$0.013/min + Twilio number ($1/month)

#### Option B: In-App Click-to-Call (Alternative)
Instead of actual phone calls, implement in-app calling using:
- Twilio Voice SDK
- Agora.io
- AWS Chime SDK

This gives full control and better privacy but requires more development.

**Current Implementation:**
The MentorConnectionScreen currently uses a hardcoded PSI helpline number. Update this to call your backend API that handles the anonymous connection.

```javascript
// screens/MentorConnectionScreen.tsx
const handleConnectToMentor = async () => {
  try {
    // Call your backend API
    const response = await fetch('YOUR_API_ENDPOINT/connect-mentor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: currentUser.id }),
    });

    const { callUrl } = await response.json();
    // Initiate call through backend proxy
  } catch (error) {
    Alert.alert('Connection Error', 'Please try again');
  }
};
```

---

### 4. Analytics & Mood Tracking

**Recommended:** AWS Pinpoint or Mixpanel

**Events to Track:**
- Daily mood entries
- Feature usage (breathing, affirmations, etc.)
- Resource views
- Crisis button usage (important for identifying users needing help)

**Implementation:**
```bash
# AWS Amplify Analytics
amplify add analytics

# Choose Pinpoint
amplify push
```

```javascript
import { Analytics } from 'aws-amplify';

// Track events
Analytics.record({
  name: 'moodEntry',
  attributes: { mood: '3', date: new Date().toISOString() }
});
```

---

### 5. Push Notifications (Optional but Recommended)

**Recommended:** Expo Push Notifications

**Use Cases:**
- Daily check-in reminders
- Encouragement messages
- Resource suggestions based on mood patterns

**Implementation:**
```bash
expo install expo-notifications
```

```javascript
import * as Notifications from 'expo-notifications';

// Request permission
const { status } = await Notifications.requestPermissionsAsync();

// Get push token
const token = await Notifications.getExpoPushTokenAsync();

// Save token to your backend for this user
```

---

## Implementation Priority

### Phase 1 (Critical - Do First):
1. ✅ Authentication (AWS Amplify Auth)
2. ✅ Database (AWS Amplify DataStore)
3. ✅ Mentor Connection Service (Twilio)

### Phase 2 (Important):
4. Analytics for mood tracking patterns
5. Push notifications for daily check-ins

### Phase 3 (Nice to Have):
6. Advanced analytics/ML for early detection
7. In-app messaging with mentors
8. Community features

---

## Environment Variables

Create a `.env` file (don't commit to git):
```bash
# Twilio
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number

# AWS
AWS_REGION=us-east-1
AWS_USER_POOL_ID=your_pool_id
AWS_IDENTITY_POOL_ID=your_identity_pool

# API
API_ENDPOINT=https://your-api.com
```

---

## Security Considerations

### HIPAA Compliance (If Applicable)
If storing health information:
- Use AWS HIPAA-eligible services
- Sign BAA (Business Associate Agreement)
- Encrypt data at rest and in transit
- Implement audit logging

### Data Privacy
- Never store phone numbers unencrypted
- Use AWS Secrets Manager for API keys
- Implement proper data deletion (user right to be forgotten)
- Add rate limiting to prevent abuse

### Current Gaps
- No actual backend integration (UI only)
- Phone numbers not hidden (hardcoded direct calls)
- No data persistence
- No user authentication flow

---

## Cost Estimates (AWS)

**Monthly costs for ~1000 active users:**
- Amplify Auth: Free tier covers
- DynamoDB: ~$5-10
- Lambda: ~$2-5
- Twilio: ~$100-200 (depends on call volume)
- S3 + CloudFront: ~$1-2

**Total: ~$110-220/month**

---

## Getting Help

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Twilio Voice Documentation](https://www.twilio.com/docs/voice)
- [Expo Notifications](https://docs.expo.dev/push-notifications/overview/)

## Next Steps

1. Set up AWS account
2. Install and configure Amplify CLI
3. Add authentication
4. Add database with schema
5. Set up Twilio account
6. Create Lambda functions for mentor connection
7. Test thoroughly before production launch
