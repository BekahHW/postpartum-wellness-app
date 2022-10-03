import {StackScreenProps} from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {RootStackParamList} from "../types";

interface PasswordState {
  password: string;
  rePassword: string;
}

export default function SignUpScreen({ navigation }: StackScreenProps<RootStackParamList, "SignUp">) {
  const [username, setUsername] = useState("");
  const [passwords, setPasswords] = useState<PasswordState>({
    password: '',
    rePassword: '',
  });
  const [signedUp, setSignedUp] = useState(false);

  const signedUpMessage = (
    <Text style={styles.container}>
      Thank you for signing up! Please check your email for verification.
    </Text>
  );  

  const signUpForm = (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Username"
        value={username}
        onChangeText={(text: string) => setUsername(text)}
        onSubmitEditing={() => console.log('submit')}
      />

      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Password"
        value={passwords.password}
        onChangeText={(password: string) => setPasswords(prev => ({...prev, password}))}
        secureTextEntry={true}
        onSubmitEditing={() => console.log("submit")}
      />
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Re-enter password for validation"
        value={passwords.rePassword}
        onChangeText={(rePassword: string) => setPasswords(prev => ({ ...prev, rePassword }))}
        secureTextEntry={true}
        onSubmitEditing={() => console.log("submit")}
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => setSignedUp(true)}
      >
        Sign-Up!
      </Button>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Postpartum Wellness Signup</Text>
        {signedUp ? signedUpMessage : signUpForm}
      </View>
    </View>
  );
}

SignUpScreen.navigationOptions = {
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
    maxHeight: 64,
    justifyContent: "center",
    marginBottom: 8,
  },
  button: {
    minWidth: 200,
    marginBottom: 16,
    marginTop: 8,
  },
});