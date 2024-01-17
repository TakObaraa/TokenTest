import { Meta, StoryObj } from '@storybook/react';
import FacilityTypeEditModal from '.';

export default ({
  component: FacilityTypeEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    modalType: 'edit',
    onDelete: () => {},
  },
} as Meta);

export const Default: StoryObj<typeof FacilityTypeEditModal> = {};
