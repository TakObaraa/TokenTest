import { Meta, StoryObj } from '@storybook/react';
import ExecuteConfirmModal from '.';

const meta: Meta<typeof ExecuteConfirmModal> = {
  component: ExecuteConfirmModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    modalTitleIcon: 'check',
    message: '削除しますか？',
  },
};

export default meta;

export const Defalut: StoryObj<typeof ExecuteConfirmModal> = {};
