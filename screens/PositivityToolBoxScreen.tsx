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
            onPress={() => console.log("title of that card") }
          >
            <Card style={styles.card}>
              <Card.Title title="Affirmation"></Card.Title>
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

  },
  card: {

  },
});
