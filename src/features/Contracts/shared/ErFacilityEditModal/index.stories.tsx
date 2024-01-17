import { Meta, StoryObj } from '@storybook/react';
import ErFacilityEditModal from 'src/features/Contracts/shared/ErFacilityEditModal';

const meta: Meta<typeof ErFacilityEditModal> = {
  component: ErFacilityEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    useSystem: 'pro',
    useStaffInput: true,
    erFacilityModalType: 'new',
    proFamilySetting: true,
    comFamilySetting: 'single',
  },
};

export default meta;

type Story = StoryObj<typeof ErFacilityEditModal>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};
