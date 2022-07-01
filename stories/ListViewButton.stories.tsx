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
  width: '20px',
  height: '20px',
  fontSize: '16px',
};
