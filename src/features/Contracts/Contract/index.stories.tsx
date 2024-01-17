import { Meta, StoryObj } from '@storybook/react';
import Contract from 'src/features/Contracts/Contract';

const meta: Meta<typeof Contract> = {
  component: Contract,
};

export default meta;

type Story = StoryObj<typeof Contract>;

export const Default: Story = {};
