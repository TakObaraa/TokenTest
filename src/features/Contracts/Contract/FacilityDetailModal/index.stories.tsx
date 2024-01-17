import { Meta, StoryObj } from '@storybook/react';
import FacilityDetailModal from 'src/features/Contracts/Contract/FacilityDetailModal';

const meta: Meta<typeof FacilityDetailModal> = {
  component: FacilityDetailModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    onEdit: () => {},
    facilityType: 'er',
    useSystem: 'pro',
  },
};

export default meta;

type Story = StoryObj<typeof FacilityDetailModal>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};
