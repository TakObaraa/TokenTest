import { Meta, StoryObj } from '@storybook/react';
import ContractCsvModal from 'src/features/Contracts/Contract/ContractCsvModal';

const meta: Meta<typeof ContractCsvModal> = {
  component: ContractCsvModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    useSystem: 'pro',
  },
};

export default meta;

type Story = StoryObj<typeof ContractCsvModal>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};
