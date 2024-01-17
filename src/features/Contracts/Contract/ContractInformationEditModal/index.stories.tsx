import { Meta, StoryObj } from '@storybook/react';
import ContractInformationEditModal from 'src/features/Contracts/Contract/ContractInformationEditModal';

const meta: Meta<typeof ContractInformationEditModal> = {
  component: ContractInformationEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    onClick: () => {},
    useSystem: 'pro',
  },
};

export default meta;

type Story = StoryObj<typeof ContractInformationEditModal>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};
