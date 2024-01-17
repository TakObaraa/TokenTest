import type { Meta, StoryObj } from '@storybook/react';
import DeleteModal from '.';

type ComponentType = typeof DeleteModal;

const meta: Meta<ComponentType> = {
  component: DeleteModal,
};

type Story = StoryObj<ComponentType>;

export const Default: Story = {};

export default meta;
