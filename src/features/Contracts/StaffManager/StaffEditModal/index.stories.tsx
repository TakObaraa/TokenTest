import { Meta, StoryObj } from '@storybook/react';
import StaffEditModal from '.';

const meta: Meta<typeof StaffEditModal> = {
  component: StaffEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    staffStatus: false,
  },
};

export default meta;

export const Default: StoryObj<typeof StaffEditModal> = {};
