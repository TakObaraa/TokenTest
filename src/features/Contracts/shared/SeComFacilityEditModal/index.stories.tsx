import { Meta, StoryObj } from '@storybook/react';
import SeComFacilityEditModal from 'src/features/Contracts/shared/SeComFacilityEditModal';

const meta: Meta<typeof SeComFacilityEditModal> = {
  component: SeComFacilityEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    useSystem: 'pro',
    seComFacilityModalType: 'new',
    proFamilySetting: true,
    comFamilySetting: 'single',
    useFacilityTypeSetting: true,
  },
};

export default meta;

type Story = StoryObj<typeof SeComFacilityEditModal>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};
