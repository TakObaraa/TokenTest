import type { Meta, StoryObj } from '@storybook/react';
import ImportLogCard from '.';

type ComponentType = typeof ImportLogCard;

const meta: Meta<ComponentType> = {
  component: ImportLogCard,
};

type Story = StoryObj<ComponentType>;

export const Default: Story = {};

export default meta;
