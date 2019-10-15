import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Button } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Postpartum Wellness</Text>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log('Pressed')}
          >
            Sign-In
          </Button>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log('Pressed')}
          >
            Sign-Up
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  getStartedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 16
  },
  button: {
    minWidth: 200,
    marginBottom: 16
  }
})
