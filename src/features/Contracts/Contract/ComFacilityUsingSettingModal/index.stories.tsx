import { Meta, StoryObj } from '@storybook/react';
import ComFacilityUsingSettingModal from 'src/features/Contracts/Contract/ComFacilityUsingSettingModal';

const meta: Meta<typeof ComFacilityUsingSettingModal> = {
  component: ComFacilityUsingSettingModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    facilityStatus: false,
  },
};

export default meta;

type Story = StoryObj<typeof ComFacilityUsingSettingModal>;

export const Default: Story = {};
