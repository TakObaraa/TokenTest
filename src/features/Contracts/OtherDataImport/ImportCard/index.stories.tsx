import type { Meta, StoryObj } from '@storybook/react';
import ImportCard from '.';

type ComponentType = typeof ImportCard;

const meta: Meta<ComponentType> = {
  component: ImportCard,
};

type Story = StoryObj<ComponentType>;

export const Default: Story = {};

export default meta;
