import { Meta, StoryObj } from '@storybook/react';
import ErFacilityRegisterCard from '.';

const meta: Meta<typeof ErFacilityRegisterCard> = {
  component: ErFacilityRegisterCard,
  args: {
    onEdit: () => {},
    onAdd: () => {},
    useSystem: 'pro',
  },
};

export default meta;

export const Default: StoryObj<typeof ErFacilityRegisterCard> = {};

export const Com: StoryObj<typeof ErFacilityRegisterCard> = {
  args: {
    useSystem: 'com',
  },
};
