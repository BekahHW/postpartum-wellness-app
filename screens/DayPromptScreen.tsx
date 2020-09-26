// import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Button, RadioButton } from "react-native-paper";

// export default function DayPromptScreen() {
//   const [radio, setRadio] = useState(null);

//   return (
//     <View style={styles.container}>
//       <View style={styles.getStartedContainer}>
//         <Text style={styles.getStartedText}>How Was Your Day?</Text>
//         <RadioButton.Group
//           onValueChange={(value) => setRadio(value)}
//           value={radio}
//         >
//           <View style={styles.radioContainer}>
//             <RadioButton value="5" />
//             <Text>5 - Awesome!</Text>
//           </View>
//           <View style={styles.radioContainer}>
//             <RadioButton value="4" />
//             <Text>4</Text>
//           </View>
//           <View style={styles.radioContainer}>
//             <RadioButton value="3" />
//             <Text>3</Text>
//           </View>
//           <View style={styles.radioContainer}>
//             <RadioButton value="2" />
//             <Text>2</Text>
//           </View>
//           <View style={styles.radioContainer}>
//             <RadioButton value="1" />
//             <Text>1 - Terrible</Text>
//           </View>
//         </RadioButton.Group>
//         <Button
//           style={styles.button}
//           mode="contained"
//           onPress={() => navigation.navigate("Home")}
//         >
//           Submit
//         </Button>
//       </View>
//     </View>
//   );
// }

// DayPromptScreen.navigationOptions = {
//   header: null,
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   getStartedContainer: {
//     alignItems: "flex-start",
//     justifyContent: "center",
//     marginHorizontal: 50,
//   },
//   getStartedText: {
//     fontSize: 24,
//     color: "rgba(96,100,109, 1)",
//     lineHeight: 24,
//     textAlign: "center",
//     marginBottom: 16,
//   },
//   radioContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   button: {
//     minWidth: 200,
//     marginBottom: 16,
//     marginTop: 8,
//   },
// });
