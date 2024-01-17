import { Meta, StoryObj } from '@storybook/react';
import RvFacilityEditModal from 'src/features/Contracts/shared/RvFacilityEditModal';

const meta: Meta<typeof RvFacilityEditModal> = {
  component: RvFacilityEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    useSystem: 'pro',
    rvFacilityType: 'facility',
    rvFacilityModalType: 'new',
    proFamilySetting: true,
    comFamilySetting: 'single',
  },
};

export default meta;

type Story = StoryObj<typeof RvFacilityEditModal>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};
