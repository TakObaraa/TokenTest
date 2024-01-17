import { Meta, StoryObj } from '@storybook/react';
import ContractDeleteModal from 'src/features/Contracts/Contract/ContractDeleteModal';

const meta: Meta<typeof ContractDeleteModal> = {
  component: ContractDeleteModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof ContractDeleteModal>;

export const Default: Story = {};
