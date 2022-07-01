import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ResetButton } from '../src';

export default {
  title: 'Reset Button',
  component: ResetButton,
} as ComponentMeta<typeof ResetButton>;

const Template: ComponentStory<typeof ResetButton> = () => <ResetButton />;

export const Default = Template.bind({});
