import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListViewItem, ListItemProps } from '../src';

export default {
  title: 'List View Item',
  component: ListViewItem,
} as ComponentMeta<typeof ListViewItem>;

const Template: ComponentStory<typeof ListViewItem> = args => (
  <ListViewItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: '1101 Q Street NW',
  link: 'https://adgg-v2.vercel.app/projects/16',
};
