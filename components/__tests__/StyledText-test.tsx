import * as React from 'react';
import { render } from '@testing-library/react-native'
import { MonoText } from '../StyledText';

it(`renders correctly`, () => {
  const { getByText } = render(<MonoText>This is awesome text</MonoText>);

  const textComponent = getByText('This is awesome text')

  expect(textComponent).not.toBeNull()
});
