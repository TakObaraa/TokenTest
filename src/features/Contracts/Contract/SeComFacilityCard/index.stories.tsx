import { Meta, StoryObj } from '@storybook/react';
import SeComFacilityCard from 'src/features/Contracts/Contract/SeComFacilityCard';

const mate: Meta<typeof SeComFacilityCard> = {
  component: SeComFacilityCard,
  args: {
    onSeComFacilityMenu: () => {},
    openToolTip: false,
    onDetailModal: () => {},
    onSeUsingSetting: () => {},
    onComUsingSetting: () => {},
    seComFacilityRadioSelect: () => {},
    useSystem: 'pro',
    onAdd: () => {},
  },
};

export default mate;

type Story = StoryObj<typeof SeComFacilityCard>;

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
