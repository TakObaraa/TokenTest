import { Meta, StoryObj } from '@storybook/react';
import ContractInformationCard from 'src/features/Contracts/Contract/ContractInformationCard';

const meta: Meta<typeof ContractInformationCard> = {
  component: ContractInformationCard,
  args: {
    onContractInformationMenu: () => {},
    openToolTip: false,
    onEdit: () => {},
    contractDelete: () => {},
    useSystem: 'pro',
  },
};

export default meta;

type Story = StoryObj<typeof ContractInformationCard>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};

export const OpenToolTip: Story = {
  args: {
    openToolTip: true,
  },
};
