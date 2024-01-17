import { Meta, StoryObj } from '@storybook/react';
import SeComFacilityRegisterCard from '.';

const meta: Meta<typeof SeComFacilityRegisterCard> = {
  component: SeComFacilityRegisterCard,
  args: {
    onEdit: () => {},
    onAdd: () => {},
    useSystem: 'pro',
  },
};

export default meta;

export const Default: StoryObj<typeof SeComFacilityRegisterCard> = {};

export const Com: StoryObj<typeof SeComFacilityRegisterCard> = {
  args: {
    useSystem: 'com',
  },
};
