import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MonoText } from '../components/StyledText';

type MonoTextComponentType = typeof MonoText;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: MonoText,
} as ComponentMeta<MonoTextComponentType>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const StyledTextMono: ComponentStory<MonoTextComponentType> = (args) => (
  <MonoText {...args} />
);

StyledTextMono.storyName = 'Mono Text';
StyledTextMono.args = {
  children: 'Hello',
  style: {
    color: 'black',
  },
};
