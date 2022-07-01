import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ResetButton, ResetProps } from '../src';

export default {
  title: 'Reset Button',
  component: ResetButton,
} as ComponentMeta<typeof ResetButton>;

const Template: ComponentStory<typeof ResetButton> = args => (
  <ResetButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: 'w-5',
  height: 'h-5',
  fontSize: 'text-md',
};
