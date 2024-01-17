import { Meta, StoryObj } from '@storybook/react';
import RvFacilityRegisterCard from '.';

const meta: Meta<typeof RvFacilityRegisterCard> = {
  component: RvFacilityRegisterCard,
  args: {
    onRvFacilityMenu: () => {},
    openToolTip: false,
    onRepresentativeFacilityAdd: () => {},
    onRepresentativeFacilityEdit: () => {},
    onFacilityAdd: () => {},
    onFacilityEdit: () => {},
    useSystem: 'pro',
  },
};

export default meta;

export const Default: StoryObj<typeof RvFacilityRegisterCard> = {};

export const Com: StoryObj<typeof RvFacilityRegisterCard> = {
  args: {
    useSystem: 'com',
  },
};
