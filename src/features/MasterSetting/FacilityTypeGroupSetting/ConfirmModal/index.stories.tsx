import { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from 'src/features/MasterSetting/FacilityTypeGroupSetting/ConfirmModal';

export default ({
  component: ConfirmModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    modalTitle: '削除の確認',
    setIcon: 'category',
    message: 'グループ内に有効の事業所種別名が存在するため削除できません。',
    modalType: 'dialog',
  },
} as Meta);

export const Default: StoryObj<typeof ConfirmModal> = {};
