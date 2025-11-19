import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const upliftingContent = [
  {
    title: 'Mom Life Truth',
    content: "Coffee: Because motherhood runs on it. Sleep is just a bonus feature that's currently unavailable.",
    emoji: '☕',
  },
  {
    title: 'Expectation vs Reality',
    content: "Expectation: Peaceful baby sleeping in a Pinterest-perfect nursery.\nReality: Baby asleep on your chest while you're afraid to move... or breathe.",
    emoji: '😴',
  },
  {
    title: 'Superpower Unlocked',
    content: "You now have the ability to function on 2 hours of sleep. That's basically a superpower.",
    emoji: '🦸‍♀️',
  },
  {
    title: 'Fashion Statement',
    content: "Spit-up is the new accessory. If your outfit doesn't have at least one mystery stain, did you even mom today?",
    emoji: '👗',
  },
  {
    title: 'Shower Achievement',
    content: "Today's achievement: Took a shower. It was brief, you heard phantom baby cries, but it counts!",
    emoji: '🚿',
  },
  {
    title: 'Baby Translation',
    content: "Baby at 2 AM: 'I've decided to practice my vocal range. The neighbors will love this concert!'",
    emoji: '🎵',
  },
  {
    title: 'Time Travel',
    content: "You thought you knew what tired meant before kids. Past you was adorably naive.",
    emoji: '⏰',
  },
  {
    title: 'New Skills',
    content: "You can now eat an entire meal with one hand, while bouncing, and singing. Olympic-level multitasking right there.",
    emoji: '🏆',
  },
  {
    title: 'Mystery Solved',
    content: "Found out why the baby was crying for 20 minutes? They wanted the pacifier that was literally in their hand.",
    emoji: '🤷‍♀️',
  },
  {
    title: 'Real Talk',
    content: "It's okay to have mixed feelings. You can be exhausted, overwhelmed, AND completely in love all at once. That's motherhood.",
    emoji: '💕',
  },
];

export default function LaughingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextContent = () => {
    setCurrentIndex((prev) => (prev + 1) % upliftingContent.length);
  };

  const currentContent = upliftingContent[currentIndex];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: colors.text }]}>
          Laughter & Light Moments
        </Text>

        <Text style={[styles.subtitle, { color: colors.text }]}>
          Because sometimes you need to laugh at the beautiful chaos
        </Text>

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
            <Text style={styles.emoji}>{currentContent.emoji}</Text>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              {currentContent.title}
            </Text>
            <Text style={[styles.content, { color: colors.text }]}>
              {currentContent.content}
            </Text>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          onPress={getNextContent}
          style={[styles.button, { backgroundColor: colors.primary }]}
          labelStyle={{ color: colors.surface }}
        >
          Show Me Another
        </Button>

        <View style={styles.reminderContainer}>
          <Text style={[styles.reminder, { color: colors.text }]}>
            Remember: It's okay to find humor in the tough moments. Laughter can
            be healing. You're doing an amazing job.
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
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
    opacity: 0.7,
  },
  card: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 32,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emoji: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 4,
    borderRadius: 24,
    marginBottom: 32,
  },
  reminderContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  reminder: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.8,
  },
});
