import { Meta, StoryObj } from '@storybook/react';
import ErFacilityCard from 'src/features/Contracts/Contract/ErFacilityCard';

const meta: Meta<typeof ErFacilityCard> = {
  component: ErFacilityCard,
  args: {
    onErFacilityMenu: () => {},
    openToolTip: false,
    onDetailModal: () => {},
    onUsingSetting: () => {},
    erFacilityRadioSelect: () => {},
    useSystem: 'pro',
    onAdd: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof ErFacilityCard>;

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
