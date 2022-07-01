import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FiltersButton, FiltersProps } from '../src';

export default {
  title: 'Filters Button',
  component: FiltersButton,
} as ComponentMeta<typeof FiltersButton>;

const Template: ComponentStory<typeof FiltersButton> = args => (
  <FiltersButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: 'w-5',
  height: 'h-5',
  fontSize: 'text-md',
};
