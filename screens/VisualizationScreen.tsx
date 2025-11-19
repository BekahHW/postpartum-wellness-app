import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, RadioButton } from 'react-native-paper';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const visualizations = [
  {
    id: 'beach',
    title: 'Peaceful Beach',
    description: 'A gentle, restorative visualization',
    script: [
      'Close your eyes and take a deep breath...',
      'Imagine yourself on a quiet beach at sunrise.',
      'Feel the soft, warm sand beneath your feet.',
      'Hear the gentle rhythm of waves rolling onto the shore.',
      'A warm, golden light spreads across the water.',
      'With each wave, feel tension leaving your body.',
      'The breeze carries away your worries, one by one.',
      'You are safe. You are calm. You are enough.',
      'Take a few more deep breaths in this peaceful place.',
      'When you\'re ready, slowly open your eyes.',
    ],
    emoji: '🏖️',
  },
  {
    id: 'garden',
    title: 'Healing Garden',
    description: 'Find peace in a nurturing space',
    script: [
      'Take a deep breath and let your shoulders relax...',
      'Picture yourself in a beautiful, quiet garden.',
      'The air is fresh and filled with the scent of flowers.',
      'Sunlight filters gently through the leaves above.',
      'You find a comfortable bench and sit down.',
      'All around you, everything is growing at its own pace.',
      'Just like these plants, you are growing and healing.',
      'There is no rush. There is no judgment here.',
      'Feel the warmth of the sun on your skin.',
      'You are exactly where you need to be.',
      'Take this peace with you as you return.',
    ],
    emoji: '🌸',
  },
  {
    id: 'mountain',
    title: 'Mountain Strength',
    description: 'Connect with your inner strength',
    script: [
      'Breathe deeply and find your center...',
      'Imagine yourself as a mountain.',
      'Strong, steady, and unshakeable.',
      'Storms may come and go around you.',
      'But you remain grounded and stable.',
      'Your foundation is solid.',
      'You have weathered challenges before.',
      'Each experience has made you stronger.',
      'Feel this strength within you now.',
      'You are capable. You are resilient.',
      'Carry this strength with you today.',
    ],
    emoji: '⛰️',
  },
];

export default function VisualizationScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  const [selectedViz, setSelectedViz] = useState(visualizations[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const currentVisualization = visualizations.find((v) => v.id === selectedViz) || visualizations[0];

  const startVisualization = () => {
    setIsPlaying(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < currentVisualization.script.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsPlaying(false);
      setCurrentStep(0);
    }
  };

  const stopVisualization = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  if (isPlaying) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.playingContainer}>
          <Text style={styles.playingEmoji}>{currentVisualization.emoji}</Text>

          <ScrollView contentContainerStyle={styles.scriptContainer}>
            <Text style={[styles.scriptText, { color: colors.text }]}>
              {currentVisualization.script[currentStep]}
            </Text>
          </ScrollView>

          <Text style={[styles.stepIndicator, { color: colors.text }]}>
            {currentStep + 1} of {currentVisualization.script.length}
          </Text>

          <View style={styles.buttonRow}>
            <Button
              mode="outlined"
              onPress={stopVisualization}
              style={[styles.controlButton, { borderColor: colors.border }]}
              labelStyle={{ color: colors.text }}
            >
              Stop
            </Button>
            <Button
              mode="contained"
              onPress={nextStep}
              style={[styles.controlButton, { backgroundColor: colors.primary }]}
              labelStyle={{ color: colors.surface }}
            >
              {currentStep < currentVisualization.script.length - 1 ? 'Next' : 'Finish'}
            </Button>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: colors.text }]}>
          Guided Visualization
        </Text>

        <Text style={[styles.subtitle, { color: colors.text }]}>
          Choose a peaceful journey for your mind
        </Text>

        <View style={styles.selectionContainer}>
          {visualizations.map((viz) => (
            <Card
              key={viz.id}
              style={[
                styles.vizCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: selectedViz === viz.id ? colors.primary : colors.border,
                  borderWidth: 2,
                },
              ]}
              onPress={() => setSelectedViz(viz.id)}
            >
              <Card.Content>
                <View style={styles.vizHeader}>
                  <Text style={styles.vizEmoji}>{viz.emoji}</Text>
                  <View style={styles.vizInfo}>
                    <Text style={[styles.vizTitle, { color: colors.text }]}>
                      {viz.title}
                    </Text>
                    <Text style={[styles.vizDescription, { color: colors.text }]}>
                      {viz.description}
                    </Text>
                  </View>
                  <RadioButton
                    value={viz.id}
                    status={selectedViz === viz.id ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedViz(viz.id)}
                    color={colors.primary}
                  />
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>

        <Button
          mode="contained"
          onPress={startVisualization}
          style={[styles.startButton, { backgroundColor: colors.primary }]}
          labelStyle={{ color: colors.surface }}
        >
          Begin Visualization
        </Button>

        <View style={styles.tipContainer}>
          <Text style={[styles.tip, { color: colors.text }]}>
            💡 Tip: Find a quiet, comfortable space. Take your time with each step.
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
  selectionContainer: {
    marginBottom: 24,
  },
  vizCard: {
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  vizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vizEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  vizInfo: {
    flex: 1,
  },
  vizTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  vizDescription: {
    fontSize: 14,
    opacity: 0.7,
  },
  startButton: {
    paddingVertical: 4,
    borderRadius: 24,
    marginBottom: 16,
  },
  tipContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  tip: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.8,
  },
  playingContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playingEmoji: {
    fontSize: 64,
    marginBottom: 32,
  },
  scriptContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  scriptText: {
    fontSize: 22,
    lineHeight: 34,
    textAlign: 'center',
    fontWeight: '300',
  },
  stepIndicator: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 32,
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  controlButton: {
    flex: 1,
    borderRadius: 24,
  },
});
