import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PopupBody, PopupProps } from '../src/PopupBody';

export default {
  title: 'Popup Body',
  component: PopupBody,
} as ComponentMeta<typeof PopupBody>;

const Template: ComponentStory<typeof PopupBody> = args => (
  <PopupBody {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: '1101 Q Street NW',
  hero:
    'https://adg-projects.nyc3.cdn.digitaloceanspaces.com/89daaa0a6a9c0c34b8860357fde99848.webp',
  department: 'Architecture',
  subcategory: 'Multi-Family',
  building_type: 'Condos',
  description:
    '11Q is a luxury condo development with 15 units located in the Logan Circle neighborhood. This building is a renovation and addition to an existing structure, includes both one and two bedroom floor plans with designer finishes throughout and private outdoor terraces.',
  link: 'https://adgg-v2.vercel.app/projects/16',
};
