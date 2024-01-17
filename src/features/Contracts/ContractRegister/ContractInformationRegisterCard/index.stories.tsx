import { Meta, StoryObj } from '@storybook/react';
import ContractInformationRegisterCard from 'src/features/Contracts/ContractRegister/ContractInformationRegisterCard';

const meta: Meta<typeof ContractInformationRegisterCard> = {
  component: ContractInformationRegisterCard,
  args: {
    useSystem: 'pro',
  },
};

export default meta;

export const Default: StoryObj<typeof ContractInformationRegisterCard> = {};

export const Com: StoryObj<typeof ContractInformationRegisterCard> = {
  args: {
    useSystem: 'com',
  },
};
