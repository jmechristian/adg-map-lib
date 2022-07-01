import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MarkerPin } from '../src';

export default {
  title: 'Marker Pin',
  component: MarkerPin,
} as ComponentMeta<typeof MarkerPin>;

const Template: ComponentStory<typeof MarkerPin> = () => <MarkerPin />;

export const Default = Template.bind({});
