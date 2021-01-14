import React, { useState } from "react";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, SafeAreaView } from 'react-native';
import Colors from "../constants/Colors";
import CardColors from "../constants/CardColors";
import BreathingSvg from "../components/BreathingSvg";
import Constants from "expo-constants";

export default function PositivityToolBox() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
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
                <Card.Cover 
                  style={styles.cardCover}
                  source={require("../assets/images/loving_it.png")}
                  resizeMode="contain"
                />
                <Card.Title title="Affirmation" subtitle="Some text here" style={styles.cardTitle}></Card.Title>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("mindfulness") }
          >
            <Card style={styles.pinkCard}>
              <View style={styles.cardContainer}>
                <Card.Cover 
                  style={styles.cardCover}
                  source={require("../assets/images/meditating.png")}
                  resizeMode="contain"
                />
                <Card.Title title="Mindfulness" subtitle="Some text here" style={styles.cardTitle}></Card.Title>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("breathing") }
          >
            <Card style={styles.orangeCard}>
              <View style={styles.cardContainer}>
                <Card.Content style={styles.cardContent}>
                  <BreathingSvg />
                </Card.Content>
                <Card.Title title="Breathing" subtitle="Some text here" style={styles.cardTitle}></Card.Title>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("laughing") }
          >
            <Card style={styles.greenCard}>
              <View style={styles.cardContainer}>
                <Card.Cover 
                  style={styles.cardCover}
                  source={require("../assets/images/feeling_happy.png")}
                  resizeMode="contain"
                />
                <Card.Title title="Laughing" subtitle="Some text here" style={styles.cardTitle}></Card.Title>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("visualization") }
          >
            <Card style={styles.yellowCard}>
              <View style={styles.cardContainer}>
                <Card.Cover 
                  style={styles.cardCover}
                  source={require("../assets/images/flowers.png")}
                  resizeMode="contain"
                />
                <Card.Title title="Visualization" subtitle="Some text here" style={styles.cardTitle}></Card.Title>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => console.log("moving") }
          >
            <Card style={styles.blueCard}>
              <View style={styles.cardContainer}>
                <Card.Cover 
                  style={styles.cardCover}
                  source={require("../assets/images/nature_benefits.png")}
                  resizeMode="contain"
                />
                <Card.Title title="Moving" subtitle="Some text here" style={styles.cardTitle}></Card.Title>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  contentContainer: {
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
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  cardTitle: {
    width: "60%",
    height: 100,
    padding: 10,
  },
  cardCover: {
    backgroundColor: "transparent",
    width: "35%",
    height: 100,
    padding: 10,
  },
  cardContent: {
    backgroundColor: "transparent",
    width: "35%",
    height: 100,
    padding: 10,
    alignItems: "center",
  },
  purpleCard: {
    backgroundColor: CardColors.purple,
    width: "100%", // Required to make it work on Android
    height: 100, //Required to make it work on Android
  },
  pinkCard: {
    backgroundColor: CardColors.pink,
    width: "100%",
    height: 100,
  },
  orangeCard: {
    backgroundColor: CardColors.orange,
    width: "100%",
    height: 100,
  },
  greenCard: {
    backgroundColor: CardColors.green,
    width: "100%",
    height: 100,
  },
  yellowCard: {
    backgroundColor: CardColors.yellow,
    width: "100%",
    height: 100,
  },
  blueCard: {
    backgroundColor: CardColors.blue,
    width: "100%",
    height: 100,
  }
});
