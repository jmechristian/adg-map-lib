import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListViewButton } from '../src';

export default {
  title: 'List View Button',
  component: ListViewButton,
} as ComponentMeta<typeof ListViewButton>;

const Template: ComponentStory<typeof ListViewButton> = () => (
  <ListViewButton />
);

export const Default = Template.bind({});
