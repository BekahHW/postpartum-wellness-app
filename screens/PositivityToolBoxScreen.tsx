import React, { useState } from "react";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch } from 'react-native';
import Colors from "../constants/Colors";
import CardColors from "../constants/CardColors";

export default function PositivityToolBox() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Positivity Toolbox</Text>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("affirmation") }
          >
            <Card style={styles.purpleCard}>
              <View style={styles.cardContainer}>
                <Card.Title title="Affirmation"></Card.Title>
                <Card.Cover source={{ uri: "../assets/images/loving_it.png" }} />
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("mindfulness") }
          >
            <Card style={styles.pinkCard}>
              <View style={styles.cardContainer}>
                <Card.Title title="Mindfulness"></Card.Title>
                <Card.Content>
                  <Paragraph>Some text here.</Paragraph>
                </Card.Content>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("breathing") }
          >
            <Card style={styles.orangeCard}>
              <Card.Title title="Breathing"></Card.Title>
              <Card.Content>
                <Paragraph>Some text here.</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("laughing") }
          >
            <Card style={styles.greenCard}>
              <Card.Title title="Laughing"></Card.Title>
              <Card.Content>
                <Paragraph>Some text here.</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("visualization") }
          >
            <Card style={styles.yellowCard}>
              <Card.Title title="Visualization"></Card.Title>
              <Card.Content>
                <Paragraph>Some text here.</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("moving") }
          >
            <Card style={styles.blueCard}>
              <Card.Title title="Moving"></Card.Title>
              <Card.Content>
                <Paragraph>Some text here.</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.light.background,
  },
  getStartedContainer: {
    justifyContent: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 24,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  touchable: {
    paddingTop: 30,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  cardTitle: {
    alignItems: "right",
    width: "25%",
    height: 100,
    padding: 10,
  },
  cardContent: {
    alignItems: "left",
    width: "70%",
    height: 100,
    padding: 10,
  },
  purpleCard: {
    backgroundColor: CardColors.purple,
  },
  pinkCard: {
    backgroundColor: CardColors.pink,
  },
  orangeCard: {
    backgroundColor: CardColors.orange,
  },
  greenCard: {
    backgroundColor: CardColors.green,
  },
  yellowCard: {
    backgroundColor: CardColors.yellow,
  },
  blueCard: {
    backgroundColor: CardColors.blue,
  }
});
