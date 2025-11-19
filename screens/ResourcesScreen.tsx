import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import { Card, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PositivityToolBoxParamList } from '../types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

type Props = NativeStackScreenProps<PositivityToolBoxParamList, 'Resources'>;

export default function ResourcesScreen({ navigation }: Props) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  const handleEmergencyCall = (number: string, name: string) => {
    Alert.alert(
      `Call ${name}`,
      `Would you like to call ${name} now?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call',
          onPress: () => Linking.openURL(`tel:${number}`),
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: colors.text }]}>
          Resources & Support
        </Text>

        <Text style={[styles.subtitle, { color: colors.text }]}>
          You are not alone. Help is available.
        </Text>

        {/* Emergency Resources */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            🚨 Immediate Help
          </Text>

          <Card style={[styles.emergencyCard, { backgroundColor: colors.errorBackground }]}>
            <Card.Content>
              <Text style={[styles.emergencyTitle, { color: colors.errorText }]}>
                Crisis Support
              </Text>
              <Text style={[styles.emergencyText, { color: colors.errorText }]}>
                If you're in crisis or having thoughts of harming yourself or your baby:
              </Text>
              <Button
                mode="contained"
                onPress={() => handleEmergencyCall('988', '988 Suicide & Crisis Lifeline')}
                style={[styles.emergencyButton, { backgroundColor: colors.errorText }]}
                labelStyle={{ color: '#FFFFFF' }}
                icon="phone"
              >
                Call 988 - Crisis Lifeline
              </Button>
              <Button
                mode="outlined"
                onPress={() => handleEmergencyCall('911', '911')}
                style={[styles.emergencyButton, { borderColor: colors.errorText }]}
                labelStyle={{ color: colors.errorText }}
                icon="phone"
              >
                Call 911 - Emergency
              </Button>
            </Card.Content>
          </Card>
        </View>

        {/* Mentor Connection */}
        <View style={styles.section}>
          <Card
            style={[
              styles.card,
              {
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              },
            ]}
          >
            <Card.Content>
              <Text style={styles.mentorTitle}>
                💬 Talk to a Mentor
              </Text>
              <Text style={styles.mentorText}>
                Connect with a non-judgmental postpartum support mentor who understands what you're going through.
              </Text>
              <Button
                mode="contained"
                onPress={() => navigation.navigate('MentorConnection')}
                style={[styles.button, { backgroundColor: '#FFFFFF' }]}
                labelStyle={{ color: colors.primary }}
                icon="account-heart"
              >
                Connect with a Mentor
              </Button>
            </Card.Content>
          </Card>
        </View>

        {/* Support Organizations */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            📞 Support Organizations
          </Text>

          <Card style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Card.Content>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                Postpartum Support International (PSI)
              </Text>
              <Text style={[styles.cardText, { color: colors.text }]}>
                24/7 helpline for postpartum depression and anxiety
              </Text>
              <Button
                mode="outlined"
                onPress={() => handleEmergencyCall('18002738255', 'PSI Helpline')}
                style={[styles.button, { borderColor: colors.primary }]}
                labelStyle={{ color: colors.primary }}
              >
                1-800-273-8255
              </Button>
            </Card.Content>
          </Card>

          <Card style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Card.Content>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                SAMHSA National Helpline
              </Text>
              <Text style={[styles.cardText, { color: colors.text }]}>
                Free, confidential, 24/7 treatment referral and information service
              </Text>
              <Button
                mode="outlined"
                onPress={() => handleEmergencyCall('18006624357', 'SAMHSA')}
                style={[styles.button, { borderColor: colors.primary }]}
                labelStyle={{ color: colors.primary }}
              >
                1-800-662-4357
              </Button>
            </Card.Content>
          </Card>
        </View>

        {/* Information Resources */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            📚 Learn More
          </Text>

          <Card style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Card.Content>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                Understanding Postpartum Mood Disorders
              </Text>
              <Text style={[styles.cardText, { color: colors.text }]}>
                Learn about postpartum depression, anxiety, and other mood changes. Understanding what you're experiencing is the first step to healing.
              </Text>
              <View style={styles.infoBox}>
                <Text style={[styles.infoText, { color: colors.text }]}>
                  • Postpartum Depression{'\n'}
                  • Postpartum Anxiety{'\n'}
                  • Postpartum OCD{'\n'}
                  • Postpartum Psychosis{'\n'}
                  • Baby Blues
                </Text>
              </View>
            </Card.Content>
          </Card>

          <Card style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Card.Content>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                Support for Your Family
              </Text>
              <Text style={[styles.cardText, { color: colors.text }]}>
                Resources to help your partner, family members, and friends understand and support you during this time.
              </Text>
            </Card.Content>
          </Card>
        </View>

        <View style={styles.reminder}>
          <Text style={[styles.reminderText, { color: colors.text }]}>
            Remember: Seeking help is a sign of strength. You deserve support and care.
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
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  emergencyCard: {
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emergencyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  emergencyButton: {
    marginTop: 8,
    borderRadius: 24,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  mentorTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  mentorText: {
    fontSize: 15,
    color: '#FFFFFF',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'center',
    opacity: 0.95,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
    opacity: 0.8,
  },
  button: {
    marginTop: 8,
    borderRadius: 24,
  },
  infoBox: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  infoText: {
    fontSize: 14,
    lineHeight: 22,
  },
  reminder: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.02)',
    marginTop: 8,
  },
  reminderText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.8,
  },
});
