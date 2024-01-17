import { Meta, StoryObj } from '@storybook/react';
import ContractsList from 'src/features/Contracts/ContractsList';

const meta: Meta<typeof ContractsList> = {
  component: ContractsList,
};

export default meta;

export const Default: StoryObj<typeof ContractsList> = {};
