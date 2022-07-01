import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListViewButton, ListViewProps } from '../src';

export default {
  title: 'List View Button',
  component: ListViewButton,
} as ComponentMeta<typeof ListViewButton>;

const Template: ComponentStory<typeof ListViewButton> = args => (
  <ListViewButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: 'w-5',
  height: 'h-5',
  fontSize: 'text-md',
};
