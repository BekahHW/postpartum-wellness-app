import React from 'react';
import { PositivityToolBoxParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Card } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import CardColors from '../constants/CardColors';
import useColorScheme from '../hooks/useColorScheme';
import BreathingSvg from '../assets/undraw_svgs/BreathingSvg';
import LovingItSvg from '../assets/undraw_svgs/LovingItSvg';
import MeditatingSvg from '../assets/undraw_svgs/MeditatingSvg';
import FeelingHappySvg from '../assets/undraw_svgs/FeelingHappySvg';
import FlowersSvg from '../assets/undraw_svgs/FlowersSvg';
import NatureBenefitsSvg from '../assets/undraw_svgs/NatureBenefits';

type Props = NativeStackScreenProps<PositivityToolBoxParamList, 'PositivityToolBoxScreen'>;

export default function PositivityToolBox({ navigation }: Props) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  const tools = [
    {
      title: 'Affirmation',
      subtitle: 'Positive reminders for today',
      color: CardColors.lavender,
      svg: <LovingItSvg />,
      onPress: () => navigation.navigate('Affirmation'),
    },
    {
      title: 'Mindfulness',
      subtitle: 'Ground yourself in the moment',
      color: CardColors.rose,
      svg: <MeditatingSvg />,
      onPress: () => navigation.navigate('Mindfulness'),
    },
    {
      title: 'Breathing',
      subtitle: 'Calm your mind and body',
      color: CardColors.peach,
      svg: <BreathingSvg />,
      onPress: () => navigation.navigate('Breathing'),
    },
    {
      title: 'Laughing',
      subtitle: 'Find joy in the moment',
      color: CardColors.sage,
      svg: <FeelingHappySvg />,
      onPress: () => navigation.navigate('Laughing'),
    },
    {
      title: 'Visualization',
      subtitle: 'Peaceful mental imagery',
      color: CardColors.cream,
      svg: <FlowersSvg />,
      onPress: () => navigation.navigate('Visualization'),
    },
    {
      title: 'Moving',
      subtitle: 'Gentle movement for wellness',
      color: CardColors.sky,
      svg: <NatureBenefitsSvg />,
      onPress: () => navigation.navigate('Moving'),
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>
            Wellness Toolbox
          </Text>
          <Text style={[styles.subtitle, { color: colors.text }]}>
            Choose a tool to support your wellbeing
          </Text>
        </View>

        <View style={styles.getStartedContainer}>
          {tools.map((tool, index) => (
            <TouchableOpacity
              key={index}
              style={styles.touchable}
              onPress={tool.onPress}
              activeOpacity={0.7}
            >
              <Card style={[styles.card, { backgroundColor: tool.color }]}>
                <View style={styles.cardContainer}>
                  <Card.Content style={styles.cardContent}>
                    {tool.svg}
                  </Card.Content>
                  <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>{tool.title}</Text>
                    <Text style={styles.cardSubtitle}>{tool.subtitle}</Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Resources')}
            activeOpacity={0.7}
          >
            <Card style={[styles.resourceCard, { backgroundColor: colors.primary }]}>
              <View style={styles.resourceCardContent}>
                <Text style={styles.resourceTitle}>📚 Resources & Support</Text>
                <Text style={styles.resourceSubtitle}>
                  Find helpful information and connect with support
                </Text>
              </View>
            </Card>
          </TouchableOpacity>
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
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
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
  },
  getStartedContainer: {
    gap: 16,
  },
  touchable: {
    width: '100%',
  },
  card: {
    width: '100%',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  cardContent: {
    backgroundColor: 'transparent',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3A3A3A',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#3A3A3A',
    opacity: 0.8,
  },
  resourceCard: {
    width: '100%',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resourceCardContent: {
    padding: 20,
    alignItems: 'center',
  },
  resourceTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 6,
    textAlign: 'center',
  },
  resourceSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
  },
});
