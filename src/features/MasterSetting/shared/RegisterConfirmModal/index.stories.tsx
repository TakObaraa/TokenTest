import { Meta, StoryObj } from '@storybook/react';
import RegisterConfirmModal from 'src/features/MasterSetting/shared/RegisterConfirmModal';

export default ({
  component: RegisterConfirmModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    message: '登録してもよろしいですか？',
    onRegister: () => {},
  },
} as Meta);

export const Default: StoryObj<typeof RegisterConfirmModal> = {};
