import * as React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import HomeScreen from '../../screens/HomeScreen';
import * as WebBrowser from 'expo-web-browser';

jest.mock('expo-web-browser')

describe('<HomeScreen /> component', () => {
  it(`renders correctly`, () => {
    const path = 'some/path'
    const { getByText } = render(<HomeScreen path={path} />);

    const openCodeText = getByText('Open up the code for this screen:')
    const pathText = getByText(path)
    const getStartedText = getByText('Change any of the text, save the file, and your app will automatically update.')
    const tapText = getByText(`Tap here if your app doesn't automatically update after making changes`)

    expect(openCodeText).not.toBeNull()
    expect(pathText).not.toBeNull()
    expect(getStartedText).not.toBeNull()
    expect(tapText).not.toBeNull()
  });

  it('should load the help web page when the "tap here" text is tapped', () => {
    const path = 'some/path'
    const { getByText } = render(<HomeScreen path={path} />);
    const tapText = getByText(`Tap here if your app doesn't automatically update after making changes`)

    fireEvent.press(tapText)

    expect(WebBrowser.openBrowserAsync).toHaveBeenCalledTimes(1)
    expect(WebBrowser.openBrowserAsync).toHaveBeenCalledWith('https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet')
  })
});
