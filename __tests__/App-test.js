import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import { act, create, renderer } from "react-test-renderer";

import App from "../App";

jest.mock("expo", () => ({
  AppLoading: "AppLoading",
}));

jest.mock("../navigation/AppNavigator", () => "AppNavigator");

describe("App", () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`renders the loading screen`, () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders the root without loading screen`, () => {
    let tree;

    act(() => {
      tree = create(<App skipLoadingScreen />);
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
