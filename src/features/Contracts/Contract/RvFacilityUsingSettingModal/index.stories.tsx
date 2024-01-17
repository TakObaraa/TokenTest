import { Meta, StoryObj } from '@storybook/react';
import RvFacilityUsingSettingModal from '.';

const meta: Meta<typeof RvFacilityUsingSettingModal> = {
  component: RvFacilityUsingSettingModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
  },
};

export default meta;

export const Default: StoryObj<typeof RvFacilityUsingSettingModal> = {};
