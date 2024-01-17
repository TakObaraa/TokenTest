import { Meta, StoryObj } from '@storybook/react';
import FacilityTypeGroupEditModal from '.';

export default ({
  component: FacilityTypeGroupEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    modalType: 'edit',
    onDelete: () => {},
  },
} as Meta);

export const Default: StoryObj<typeof FacilityTypeGroupEditModal> = {};
