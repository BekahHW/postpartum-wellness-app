import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';

// User picture - circle
// days in a row tracked
// get support -> button that immediately sends a message to support system
// Get help now -> national suicide hotline?

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          style={styles.profilePhoto}
          source={require('../assets/images/sample-avatar.png')}
        />
        <View style={styles.userInfoTextContainer}>
          <View style={styles.nameView}>
            <Text style={styles.name}>First Last Name</Text>
          </View>
          <View style={styles.babyNameView}>
            <Text style={styles.babyName}>Baby's name Mom</Text>
          </View>
        </View>
      </View>
      <View style={styles.trackedContainer}>
        <Text style={styles.trackingText}>You have tracked 0 days!</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('text a friend')}
        >
          Get Support
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('help now')}
        >
          Get Help Now
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8F9FDE',
  },
  userInfoTextContainer: {
    maxWidth: Dimensions.get('window').width - 160,
    paddingLeft: 12,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    height: '20%',
  },
  trackedContainer: {
    height: '10%',
    justifyContent: 'center',
  },
  actionsContainer: {
    height: '45%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  profilePhoto: {
    width: 128,
    height: 128,
    borderRadius: 28,
    borderColor: '#F8F8F2',
    borderWidth: 5,
  },
  button: {
    minWidth: 200,
    marginTop: 16,
  },
  trackingText: {
    fontSize: 20,
    color: '#49444B',
  },
  nameView: {
    width: Dimensions.get('window').width - 200,
    backgroundColor: '#F8F8F2',
    borderRadius: 28,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    color: '#49444B',
    fontWeight: 'bold',

  },
  babyNameView: {
    width: Dimensions.get('window').width - 250,
    backgroundColor: '#BEE4E7',
    borderRadius: 4,
    padding: 4,
    marginLeft: 8,
  },
  babyName: {
    fontSize: 18,
    color: '#49444B',
    fontWeight: 'bold',
  },
});
