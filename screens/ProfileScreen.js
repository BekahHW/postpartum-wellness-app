import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

// Name, age, sex, race,
// Baby’s birthday
// Rate the birth experience (joyful - traumatic)
// Do you have a supportive partner
// Do you have a support system (family, moms group, etc.)
// Enter the phone numbers and emails of one to two people who we can text or email when you’ve been having a hard time.
// When I’m stressed, these things help me not be stressed
// Socioeconomic status
// Breastfeeding

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [previousMentalHealth, setPreviousMentalHealth] = useState("");
  const [babyDob, setBabyDOB] = useState("");
  const [birthExperience, setBirthExperience] = useState("");
  const [partner, setPartner] = useState("");
  const [supportNetwork, setSupportNetwork] = useState("");
  const [immediateSupport, setImmediateSupport] = useState({
    supportName: "",
    supportEmail: "",
    supportPhone: "",
  });
  const [destressors, setDestressors] = useState([]);
  const [socioeconomicStatus, setSocioeconomicStatus] = useState("");
  const [breastfeeding, setBreastfeeding] = useState("");
  const [race, setRace] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Postpartum Wellness Signup</Text>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={() => console.log("submit")}
        />

        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          onSubmitEditing={() => console.log("submit")}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Re-enter password for validation"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          onSubmitEditing={() => console.log("submit")}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate("Home")}
        >
          Sign-Up!
        </Button>
      </View>
    </View>
  );
}

SignInScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textInput: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 8,
  },
  button: {
    minWidth: 200,
    marginBottom: 16,
    marginTop: 8,
  },
});
