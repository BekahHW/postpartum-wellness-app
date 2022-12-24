import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Postpartum Wellness</Text>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={(text: string) => setUsername(text)}
          onSubmitEditing={() => console.log("submit")}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry={true}
          onSubmitEditing={() => console.log("submit")}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log("submit")}
        >
          Sign-In
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
   pink: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
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
export default SignInScreen;
