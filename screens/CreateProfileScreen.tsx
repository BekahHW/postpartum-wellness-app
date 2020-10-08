import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import SignInScreen from "./SignInScreen";
// Name, age, sex, race,
// Baby’s birthday
// Rate the birth experience (joyful - traumatic)
// Do you have a supportive partner
// Do you have a support system (family, moms group, etc.)
// Enter the phone numbers and emails of one to two people who we can text or email when you’ve been having a hard time.
// When I’m stressed, these things help me not be stressed
// Socioeconomic status
// Breastfeeding

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [previousMentalHealth, setPreviousMentalHealth] = useState("");
  const [babyDob, setBabyDOB] = useState("");
  const [birthExperience, setBirthExperience] = useState("");
  const [partner, setPartner] = useState(false);
  const [supportNetwork, setSupportNetwork] = useState(false);
  const [immediateSupport, setImmediateSupport] = useState({
    supportName: "",
    supportEmail: "",
    supportPhone: "",
  });
  const [destressors, setDestressors] = useState([]);
  const [socioeconomicStatus, setSocioeconomicStatus] = useState("");
  const [breastfeeding, setBreastfeeding] = useState(false);
  const [race, setRace] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        >
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Postpartum Wellness Profile</Text>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            secureTextEntry={true}
          />
          <Text style={styles.describe}>How you were feeling before your pregnancy?</Text>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Describe moods, mental health"
            value={previousMentalHealth}
            onChangeText={(text) => setPreviousMentalHealth(text)}
            secureTextEntry={true}
          />

          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("submit")}
          >
            Create My Profile!
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

SignInScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
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
  textInput: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 8,
  },
  button: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 8,
  },
  describe: {
    fontSize: 16,
    color: "rgba(96,100,109, 1)",
    marginBottom: 5,
    marginTop: 5,
  }
});
