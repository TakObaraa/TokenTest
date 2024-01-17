import { Meta, StoryObj } from '@storybook/react';
import RvFacilityCard from 'src/features/Contracts/Contract/RvFacilityCard';

const meta: Meta<typeof RvFacilityCard> = {
  component: RvFacilityCard,
  args: {
    onRvFacilityMenu: () => {},
    openToolTip: false,
    onDetailModal: () => {},
    onFacilityAdd: () => {},
    onRepresentativeFacilityAdd: () => {},
    onRepresentativeFacilityEdit: () => {},
    onRvUsingSetting: () => {},
    useSystem: 'pro',
  },
};

export default meta;

type Story = StoryObj<typeof RvFacilityCard>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};

export const OpenToolTip: Story = {
  args: {
    openToolTip: true,
  },
};
