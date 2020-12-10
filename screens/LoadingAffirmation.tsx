import * as React from "react";
import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";



export default function LoadingAffirmation() {

const affirmationData = [
  "I am a powerhouse; I am indestructible", "I am capable of amazing things if I believe it to be true and act on those feelings.", "I am strong and courageous.", "I am hopeful.", "Asking for help is a strength.", "I matter.", "Taking care of myself makes me a better mom. I give myself permission to do something to nurture me.", "I am powerful.", "Vulnerability is a strength.", "I love myself.", "I am growing.", "I will lean on others when I am tired.", "It's normal to be tired.", "One bad day does not make me a bad mom. One bad day makes me human.", "I am strong and brave, even when I feel weak.", "Sharing my fears and anxieties is a strength."
]

  let affirmation = affirmationData[Math.floor(Math.random() * affirmationData.length)];

  return (
    // <View style={styles.container}>
    //   <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={styles.contentContainer}
    //   >
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            {affirmation}
          </Text>
        </View>
    //   </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  getStartedContainer: {
    alignItems: "center",
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
  button: {
    minWidth: 200,
    marginBottom: 16,
  },
});
