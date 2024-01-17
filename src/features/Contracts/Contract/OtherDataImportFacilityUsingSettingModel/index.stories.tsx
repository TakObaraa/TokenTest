import OtherDataImportFacilityUsingSettingModal from '@features/Contracts/Contract/OtherDataImportFacilityUsingSettingModel';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OtherDataImportFacilityUsingSettingModal> = {
  component: OtherDataImportFacilityUsingSettingModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    facilityStatus: false,
  },
};

export default meta;

export const Default: StoryObj<
  typeof OtherDataImportFacilityUsingSettingModal
> = {};

export const facilityStatusTrue: StoryObj<
  typeof OtherDataImportFacilityUsingSettingModal
> = {
  args: {
    facilityStatus: true,
  },
};
