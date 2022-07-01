import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FiltersButton } from '../src';

export default {
  title: 'Filters Button',
  component: FiltersButton,
} as ComponentMeta<typeof FiltersButton>;

const Template: ComponentStory<typeof FiltersButton> = () => <FiltersButton />;

export const Default = Template.bind({});
