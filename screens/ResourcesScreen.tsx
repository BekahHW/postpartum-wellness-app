import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";

export default function ResourcesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <View style={styles.bottomMargin}>
          <Text style={styles.getStartedText}>
            Suicide hotline:{" "}
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL("tel:18002738255")}
            >
              1-800-273-8255
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.getStartedText}>Resources for moms:</Text>
          <Text
            style={styles.linkText}
            onPress={() =>
              Linking.openURL(
                "https://www.postpartum.net/get-help/help-for-moms/"
              )
            }
          >
            Postpartum Help for Moms
          </Text>
          <Text
            style={styles.linkText}
            onPress={() =>
              Linking.openURL(
                "https://www.birthtraumaassociation.org.uk/for-parents/"
              )
            }
          >
            Support for Women Who Suffer Birth Trauma
          </Text>
          <Text
            style={styles.linkText}
            onPress={() =>
              Linking.openURL(
                "https://healthyfamilies.beyondblue.org.au/pregnancy-and-new-parents/maternal-mental-health-and-wellbeing/mental-health-checklist-for-mums"
              )
            }
          >
            Maternal Mental Health and Wellbeing
          </Text>
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL("https://www.panda.org.au/")}
          >
            Support on Mental Health of Expecting and New Parents
          </Text>
        </View>
        <View>
          <Text style={styles.getStartedText}>Support for dads:</Text>
          <Text
            style={styles.linkText}
            onPress={() =>
              Linking.openURL(
                "https://www.postpartum.net/get-help/resources-for-fathers/dads-mental-health/"
              )
            }
          >
            Help for Dads during the Postpartum Period
          </Text>
        </View>
      </View>
    </View>
  );
}

ResourcesScreen.navigationOptions = {
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
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 24,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    marginBottom: 16,
  },
  linkText: {
    color: "blue",
    lineHeight: 24,
    marginBottom: 16,
  },
  bottomMargin: {
    marginBottom: 16,
  },
});
