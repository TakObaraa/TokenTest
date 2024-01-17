import { Meta, StoryObj } from '@storybook/react';
import ContractTypeEditModal from 'src/features/MasterSetting/ContractTypeSetting/ContractTypeEditModal';

export default ({
  component: ContractTypeEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    modalType: 'edit',
    onRegister: () => {},
    onDelete: () => {},
    contractTypeStatus: true,
  },
} as Meta);

export const Default: StoryObj<typeof ContractTypeEditModal> = {};
