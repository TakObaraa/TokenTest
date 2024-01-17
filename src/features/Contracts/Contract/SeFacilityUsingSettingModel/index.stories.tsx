import { Meta, StoryObj } from '@storybook/react';
import SeFacilityUsingSettingModal from '.';

const meta: Meta<typeof SeFacilityUsingSettingModal> = {
  component: SeFacilityUsingSettingModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    facilityStatus: false,
  },
};

export default meta;

export const Defalut: StoryObj<typeof SeFacilityUsingSettingModal> = {};

export const FacilityStatusTrue: StoryObj<typeof SeFacilityUsingSettingModal> =
  {
    args: {
      facilityStatus: true,
    },
  };
