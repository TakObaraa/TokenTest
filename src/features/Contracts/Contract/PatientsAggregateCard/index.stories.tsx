import { Meta, StoryObj } from '@storybook/react';
import PatientsAggregateCard from 'src/features/Contracts/Contract/PatientsAggregateCard';

const meta: Meta<typeof PatientsAggregateCard> = {
  component: PatientsAggregateCard,
};

export default meta;

type Story = StoryObj<typeof PatientsAggregateCard>;

export const Default: Story = {};
