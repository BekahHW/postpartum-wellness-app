import React, { useState } from "react";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, SafeAreaView } from 'react-native';
import Colors from "../constants/Colors";
import CardColors from "../constants/CardColors";
import BreathingSvg from "../assets/undraw_svgs/BreathingSvg";
import LovingItSvg from "../assets/undraw_svgs/LovingItSvg";
import MeditatingSvg from "../assets/undraw_svgs/MeditatingSvg";
import FeelingHappySvg from "../assets/undraw_svgs/FeelingHappySvg";
import FlowersSvg from "../assets/undraw_svgs/FlowersSvg";
import NatureBenefitsSvg from "../assets/undraw_svgs/NatureBenefits";
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
                <Card.Content style={styles.cardContent}>
                  <LovingItSvg />
                </Card.Content>
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
                <Card.Content style={styles.cardContent}>
                  <MeditatingSvg />
                </Card.Content>
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
                <Card.Content style={styles.cardContent}>
                  <FeelingHappySvg />
                </Card.Content>
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
                <Card.Content style={styles.cardContent}>
                  <FlowersSvg />
                </Card.Content>
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
                <Card.Content style={styles.cardContent}>
                  <NatureBenefitsSvg />
                </Card.Content>
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
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.light.background,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 15,
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
  cardContent: {
    backgroundColor: "transparent",
    width: "39%",
    height: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  purpleCard: {
    backgroundColor: CardColors.purple,
    width: "100%", // Required to make it work on Android
    height: 100, //Required to make it work on Android
    paddingLeft: 15,
    paddingRight: 15,
  },
  pinkCard: {
    backgroundColor: CardColors.pink,
    width: "100%",
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  orangeCard: {
    backgroundColor: CardColors.orange,
    width: "100%",
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  greenCard: {
    backgroundColor: CardColors.green,
    width: "100%",
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  yellowCard: {
    backgroundColor: CardColors.yellow,
    width: "100%",
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  blueCard: {
    backgroundColor: CardColors.blue,
    width: "100%",
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  }
});
