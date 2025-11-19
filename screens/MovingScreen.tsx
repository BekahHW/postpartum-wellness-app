import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const movements = [
  {
    id: 'neck',
    title: 'Gentle Neck Rolls',
    duration: '2 minutes',
    description: 'Release tension from holding and feeding',
    steps: [
      'Sit comfortably with your spine straight',
      'Slowly drop your chin toward your chest',
      'Gently roll your head to the right shoulder',
      'Roll to the back (but not too far)',
      'Continue to the left shoulder',
      'Complete 3-5 slow circles in each direction',
    ],
    benefits: 'Relieves neck tension from holding baby',
  },
  {
    id: 'shoulders',
    title: 'Shoulder Releases',
    duration: '3 minutes',
    description: 'Perfect for after feeding or carrying',
    steps: [
      'Stand or sit with a straight back',
      'Lift both shoulders up toward your ears',
      'Hold for 3 seconds',
      'Release and let them drop',
      'Repeat 5-10 times',
      'Then roll shoulders backward 5 times',
      'Finish with 5 forward rolls',
    ],
    benefits: 'Reduces shoulder and upper back tension',
  },
  {
    id: 'pelvic',
    title: 'Pelvic Tilts',
    duration: '5 minutes',
    description: 'Gentle core reconnection',
    steps: [
      'Lie on your back with knees bent',
      'Keep feet flat on the floor, hip-width apart',
      'Take a deep breath in',
      'As you exhale, gently tilt your pelvis up',
      'Press your lower back into the floor',
      'Hold for 3 seconds',
      'Release and repeat 10-15 times',
      'Move slowly and mindfully',
    ],
    benefits: 'Gentle core work, helps with posture',
  },
  {
    id: 'cat-cow',
    title: 'Cat-Cow Stretch',
    duration: '3 minutes',
    description: 'Soothing spine movement',
    steps: [
      'Get on hands and knees',
      'Hands under shoulders, knees under hips',
      'Inhale: Drop belly, lift chest and tailbone (Cow)',
      'Exhale: Round spine, tuck chin and tailbone (Cat)',
      'Move slowly with your breath',
      'Repeat 8-10 times',
      'Listen to your body',
    ],
    benefits: 'Spine flexibility, stress relief',
  },
  {
    id: 'walking',
    title: 'Mindful Walking',
    duration: '10-15 minutes',
    description: 'Simple movement meditation',
    steps: [
      'Step outside or walk around your space',
      'Start with a few deep breaths',
      'Walk at a comfortable pace',
      'Notice how your feet feel with each step',
      'Feel the air on your skin',
      'If your mind wanders, gently bring attention back to walking',
      'No need to go fast or far',
      'Just be present with the movement',
    ],
    benefits: 'Gentle cardio, fresh air, mental clarity',
  },
];

export default function MovingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: colors.text }]}>
          Gentle Movement
        </Text>

        <Text style={[styles.subtitle, { color: colors.text }]}>
          Soft, restorative movements for your postpartum body
        </Text>

        <View style={styles.disclaimer}>
          <Text style={[styles.disclaimerText, { color: colors.text }]}>
            ⚕️ Always consult with your healthcare provider before starting any
            exercise program, especially postpartum.
          </Text>
        </View>

        {movements.map((movement) => (
          <Card
            key={movement.id}
            style={[
              styles.card,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
              },
            ]}
          >
            <Card.Content>
              <View style={styles.cardHeader}>
                <View style={styles.headerInfo}>
                  <Text style={[styles.cardTitle, { color: colors.text }]}>
                    {movement.title}
                  </Text>
                  <Text style={[styles.duration, { color: colors.text }]}>
                    ⏱️ {movement.duration}
                  </Text>
                </View>
              </View>

              <Text style={[styles.description, { color: colors.text }]}>
                {movement.description}
              </Text>

              {expandedId === movement.id && (
                <View style={styles.details}>
                  <Text style={[styles.stepsTitle, { color: colors.primary }]}>
                    How to do it:
                  </Text>
                  {movement.steps.map((step, index) => (
                    <View key={index} style={styles.stepRow}>
                      <Text style={[styles.stepNumber, { color: colors.primary }]}>
                        {index + 1}.
                      </Text>
                      <Text style={[styles.stepText, { color: colors.text }]}>
                        {step}
                      </Text>
                    </View>
                  ))}
                  <View style={styles.benefitsContainer}>
                    <Text style={[styles.benefitsLabel, { color: colors.primary }]}>
                      Benefits:
                    </Text>
                    <Text style={[styles.benefitsText, { color: colors.text }]}>
                      {movement.benefits}
                    </Text>
                  </View>
                </View>
              )}

              <Button
                mode="text"
                onPress={() => toggleExpand(movement.id)}
                style={styles.expandButton}
                labelStyle={{ color: colors.primary }}
              >
                {expandedId === movement.id ? 'Show Less' : 'Show Steps'}
              </Button>
            </Card.Content>
          </Card>
        ))}

        <View style={styles.tipContainer}>
          <Text style={[styles.tip, { color: colors.text }]}>
            💡 Remember: Start slow, be gentle with yourself, and stop if
            anything feels uncomfortable. Your body is healing and deserves
            kindness.
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
    marginBottom: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
  disclaimer: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(232, 155, 169, 0.1)',
    marginBottom: 24,
  },
  disclaimerText: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  headerInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  duration: {
    fontSize: 14,
    opacity: 0.7,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
    opacity: 0.8,
  },
  details: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  stepsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
    minWidth: 20,
  },
  stepText: {
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  benefitsContainer: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  benefitsLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  benefitsText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  expandButton: {
    marginTop: 8,
  },
  tipContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.02)',
    marginTop: 8,
  },
  tip: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    opacity: 0.8,
  },
});
