import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

// In a production app, these would be stored securely in a backend
// and the mentor matching would be handled server-side
const MENTOR_SUPPORT_LINE = 'tel:+18002738255'; // PSI Helpline (example)

export default function MentorConnectionScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  const [hasAgreed, setHasAgreed] = useState(false);

  const handleConnectToMentor = async () => {
    try {
      const canOpen = await Linking.canOpenURL(MENTOR_SUPPORT_LINE);
      if (canOpen) {
        await Linking.openURL(MENTOR_SUPPORT_LINE);
      } else {
        Alert.alert(
          'Unable to Make Call',
          'Your device may not support phone calls. Please contact your healthcare provider for support resources.',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Connection Error',
        'We couldn\'t connect you right now. Please try again or contact your healthcare provider.',
        [{ text: 'OK' }]
      );
    }
  };

  const confirmConnection = () => {
    Alert.alert(
      'Connect with a Mentor',
      'You will be connected to a trained, non-judgmental postpartum support mentor. Your number will remain private. Are you ready to connect?',
      [
        {
          text: 'Not Yet',
          style: 'cancel',
        },
        {
          text: 'Yes, Connect Me',
          onPress: handleConnectToMentor,
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: colors.text }]}>
          Connect with a Mentor
        </Text>

        <Text style={[styles.subtitle, { color: colors.text }]}>
          You don't have to go through this alone
        </Text>

        <Card
          style={[
            styles.card,
            {
              backgroundColor: colors.noticeBackground,
              borderColor: colors.border,
            },
          ]}
        >
          <Card.Content>
            <Text style={[styles.cardTitle, { color: colors.noticeText }]}>
              🤗 What to Expect
            </Text>
            <View style={styles.pointsList}>
              <View style={styles.point}>
                <Text style={[styles.pointBullet, { color: colors.noticeText }]}>
                  •
                </Text>
                <Text style={[styles.pointText, { color: colors.noticeText }]}>
                  You'll speak with a trained postpartum support mentor
                </Text>
              </View>
              <View style={styles.point}>
                <Text style={[styles.pointBullet, { color: colors.noticeText }]}>
                  •
                </Text>
                <Text style={[styles.pointText, { color: colors.noticeText }]}>
                  Your call is confidential and judgment-free
                </Text>
              </View>
              <View style={styles.point}>
                <Text style={[styles.pointBullet, { color: colors.noticeText }]}>
                  •
                </Text>
                <Text style={[styles.pointText, { color: colors.noticeText }]}>
                  Your phone number will not be shared or stored
                </Text>
              </View>
              <View style={styles.point}>
                <Text style={[styles.pointBullet, { color: colors.noticeText }]}>
                  •
                </Text>
                <Text style={[styles.pointText, { color: colors.noticeText }]}>
                  Available for emotional support, not medical advice
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <Card.Content>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              💬 When to Connect
            </Text>
            <Text style={[styles.bodyText, { color: colors.text }]}>
              Reach out when you:
            </Text>
            <View style={styles.pointsList}>
              <Text style={[styles.listItem, { color: colors.text }]}>
                • Feel overwhelmed or anxious
              </Text>
              <Text style={[styles.listItem, { color: colors.text }]}>
                • Need someone to talk to who understands
              </Text>
              <Text style={[styles.listItem, { color: colors.text }]}>
                • Have questions about postpartum emotions
              </Text>
              <Text style={[styles.listItem, { color: colors.text }]}>
                • Just need a listening ear without judgment
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Card
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <Card.Content>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              🔒 Your Privacy
            </Text>
            <Text style={[styles.bodyText, { color: colors.text }]}>
              We take your privacy seriously. When you connect:
            </Text>
            <View style={styles.privacyBox}>
              <Text style={[styles.privacyText, { color: colors.text }]}>
                ✓ Your number stays private{'\n'}
                ✓ Calls are confidential{'\n'}
                ✓ No judgment, only support{'\n'}
                ✓ You're in control
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          onPress={confirmConnection}
          style={[styles.connectButton, { backgroundColor: colors.primary }]}
          labelStyle={styles.connectButtonLabel}
          icon="phone"
        >
          Connect with a Mentor Now
        </Button>

        <View style={styles.emergencyContainer}>
          <Text style={[styles.emergencyTitle, { color: colors.errorText }]}>
            ⚠️ Crisis Support
          </Text>
          <Text style={[styles.emergencyText, { color: colors.text }]}>
            If you're in crisis or having thoughts of harming yourself or your
            baby, please call 988 (Suicide & Crisis Lifeline) or 911 immediately.
          </Text>
        </View>

        <View style={styles.footerNote}>
          <Text style={[styles.footerText, { color: colors.text }]}>
            Remember: Asking for help is a sign of strength, not weakness.
            You're taking care of yourself and your baby by reaching out.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    opacity: 0.7,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
  pointsList: {
    marginTop: 8,
  },
  point: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  pointBullet: {
    fontSize: 16,
    marginRight: 8,
    fontWeight: 'bold',
  },
  pointText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  listItem: {
    fontSize: 15,
    lineHeight: 24,
    marginLeft: 8,
  },
  privacyBox: {
    marginTop: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  privacyText: {
    fontSize: 15,
    lineHeight: 24,
  },
  connectButton: {
    paddingVertical: 8,
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 24,
  },
  connectButtonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  emergencyContainer: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(244, 165, 174, 0.15)',
    marginBottom: 16,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    lineHeight: 20,
  },
  footerNote: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.8,
  },
});
