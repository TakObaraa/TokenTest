import OtherDataImportFacilityModal from '@features/Contracts/Contract/OtherDataImportFacilityModal';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OtherDataImportFacilityModal> = {
  component: OtherDataImportFacilityModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    useSystem: 'pro',
    modalType: 'new',
  },
};

export default meta;

export const Default: StoryObj<typeof OtherDataImportFacilityModal> = {};

export const Com: StoryObj<typeof OtherDataImportFacilityModal> = {
  args: {
    useSystem: 'com',
  },
};

export const Edit: StoryObj<typeof OtherDataImportFacilityModal> = {
  args: {
    modalType: 'edit',
  },
};
