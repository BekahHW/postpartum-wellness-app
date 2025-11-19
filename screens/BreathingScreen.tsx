import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function BreathingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  const [isBreathing, setIsBreathing] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [scaleValue] = useState(new Animated.Value(1));
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isBreathing) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            // Move to next phase
            if (phase === 'inhale') {
              setPhase('hold');
              return 4;
            } else if (phase === 'hold') {
              setPhase('exhale');
              return 4;
            } else {
              setPhase('inhale');
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isBreathing, phase]);

  useEffect(() => {
    if (isBreathing) {
      if (phase === 'inhale') {
        Animated.timing(scaleValue, {
          toValue: 1.5,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }).start();
      } else if (phase === 'exhale') {
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }).start();
      }
    }
  }, [phase, isBreathing, scaleValue]);

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
    if (!isBreathing) {
      setPhase('inhale');
      setCountdown(4);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Breathing Exercise
      </Text>

      <Text style={[styles.subtitle, { color: colors.text }]}>
        Take a moment to breathe deeply and find your calm
      </Text>

      <View style={styles.breathingContainer}>
        <Animated.View
          style={[
            styles.circle,
            {
              backgroundColor: colors.primary,
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          {isBreathing && (
            <>
              <Text style={[styles.phaseText, { color: colors.surface }]}>
                {phase === 'inhale' ? 'Breathe In' : phase === 'hold' ? 'Hold' : 'Breathe Out'}
              </Text>
              <Text style={[styles.countdownText, { color: colors.surface }]}>
                {countdown}
              </Text>
            </>
          )}
        </Animated.View>
      </View>

      <Text style={[styles.instructions, { color: colors.text }]}>
        {isBreathing
          ? 'Follow the circle as it grows and shrinks'
          : '4-4-4 breathing: Inhale for 4, Hold for 4, Exhale for 4'}
      </Text>

      <Button
        mode="contained"
        onPress={toggleBreathing}
        style={[styles.button, { backgroundColor: colors.primary }]}
        labelStyle={{ color: colors.surface }}
      >
        {isBreathing ? 'Stop' : 'Start Breathing'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 48,
    textAlign: 'center',
    opacity: 0.7,
  },
  breathingContainer: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 48,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phaseText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  countdownText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.8,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 4,
    borderRadius: 24,
  },
});
