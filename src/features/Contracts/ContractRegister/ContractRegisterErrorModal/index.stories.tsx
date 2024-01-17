import { Meta, StoryObj } from '@storybook/react';
import ContractRegisterErrorModal from '.';

const meta: Meta<typeof ContractRegisterErrorModal> = {
  component: ContractRegisterErrorModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
  },
};

export default meta;

export const Default: StoryObj<typeof ContractRegisterErrorModal> = {};
