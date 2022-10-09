import * as React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

export default function MindfulnessScreen() {
  const mindfulnessActivity = "Let's be present at this moment through all of our senses:"
  const mindfulnessQuestions = ['What do you hear?', 'What do you see?', 'What can you taste?',
  'What can you smell?', 'What can you feel']
  return (
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          {mindfulnessActivity}
        </Text>
        {mindfulnessQuestions.map(q=>(
          <Text style={styles.getStartedList}>{'\u2022'} {q}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  getStartedContainer: {
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 24,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    marginBottom: 16,
  },
  getStartedList: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 20,
    marginBottom: 2,
  },
});
