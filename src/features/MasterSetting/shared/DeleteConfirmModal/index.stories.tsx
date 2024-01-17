import DeleteConfirmModal from '@organisms/DeleteConfirmModal/DeleteConfirmModal';
import { Meta, StoryObj } from '@storybook/react';

export default ({
  component: DeleteConfirmModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    message: '削除してもよろしいですか？',
    onDelete: () => {},
  },
} as Meta);

export const Default: StoryObj<typeof DeleteConfirmModal> = {};
