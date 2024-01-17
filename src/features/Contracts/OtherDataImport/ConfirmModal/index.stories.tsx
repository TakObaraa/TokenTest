import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '.';

type ComponentType = typeof ConfirmModal;

const meta: Meta<ComponentType> = {
  component: ConfirmModal,
};

type Story = StoryObj<ComponentType>;

export const Default: Story = {};

export default meta;
