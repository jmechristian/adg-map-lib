import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ResetButton } from '../src';

export default {
  title: 'Reset Button',
  component: ResetButton,
} as ComponentMeta<typeof ResetButton>;

const Template: ComponentStory<typeof ResetButton> = args => (
  <ResetButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: '20px',
  height: '20px',
  fontSize: '16px',
};
