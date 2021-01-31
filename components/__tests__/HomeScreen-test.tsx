import * as React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import HomeScreen from '../../screens/HomeScreen';
import * as WebBrowser from 'expo-web-browser';
import App from '../../App';
import { StackScreenProps } from "@react-navigation/stack";


jest.mock('expo-web-browser')

describe('<HomeScreen /> component', () => {
  beforeEach(() => {
    const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />)

  it(`renders correctly`, () => {
    const signInButton = getByText('Sign-In')
    expect(signInButton).not.toBeNull()
  expect(signInButton).toContain('Sign-In')
  });

})
});
