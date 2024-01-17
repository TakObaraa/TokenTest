import { Meta, StoryObj } from '@storybook/react';
import ErFacilityUsingSettingModal from 'src/features/Contracts/Contract/ErFacilityUsingSettingModal';

const meta: Meta<typeof ErFacilityUsingSettingModal> = {
  component: ErFacilityUsingSettingModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    facilityStatus: true,
  },
};

export default meta;

type Story = StoryObj<typeof ErFacilityUsingSettingModal>;

export const Default: Story = {};
