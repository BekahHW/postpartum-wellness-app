import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

import Colors from '../constants/Colors';

export default function ResourcesScreen() {
  const immediateHelpLinks = [
    'SAMHSA',
    'PSI - Postpartum Support International',
    'National Suicide Hotline',
  ];
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.getStartedContainer}>
          {immediateHelpLinks.map((link, i) => (
            <Text key={i} style={styles.getStartedList}>
              {'\u2022'} {link}
            </Text>
          ))}
        </View>
        <View style={styles.container}>
          <View style={styles.getStartedContainer}>
            <TouchableOpacity onPress={() => console.log('cc')}>
              <Card style={styles.blueCard}>
                <View style={styles.cardContainer}>
                  <Card.Title
                    title="Postpartum Mood Disorders"
                    subtitle="Fact, guidelines"
                    style={styles.cardTitle}
                  />
                  <Card.Content style={styles.cardContent}>
                    <Paragraph>
                      Resources on how to help moms and identify postpartum mood
                      disorders
                    </Paragraph>
                  </Card.Content>
                </View>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('family support')}>
              <Card style={styles.blueCard}>
                <View style={styles.cardContainer}>
                  <Card.Title
                    title="Family Support"
                    subtitle="Fact, guidelines"
                    style={styles.cardTitle}
                  />
                  <Card.Content style={styles.cardContent}>
                    <Paragraph>Resources on Family Support</Paragraph>
                  </Card.Content>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

ResourcesScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.light.background,
  },
  getStartedContainer: {
    marginHorizontal: 50,
  },
  getStartedList: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
    marginBottom: 2,
  },
  cardContainer: {
    width: '100%',
    paddingBottom: 15,
    paddingLeft: 10,
  },
  cardContent: {
    paddingLeft: 0,
  },
  cardTitle: {
    paddingLeft: 0,
  },
  blueCard: {
    backgroundColor: '#d0eaff',
    width: '100%',
    marginTop: 20,
  },
});
