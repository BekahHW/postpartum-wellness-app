import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen";

test("check for buttons", () => {
  const { findByText } = render(<HomeScreen />);

  const [signinButton, signupButton] = [
    findByText("Sign-In"),
    findByText("not a button"),
  ];

  expect(signinButton).toBeVisible;
  expect(signupButton).toBeVisible;

  fireEvent.press(signInButton);

  expect(findByText("Username")).toBeVisible;
});
