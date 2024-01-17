import { Meta, StoryObj } from '@storybook/react';
import Paragraph from '.';

type ComponentType = typeof Paragraph;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
  component: Paragraph,
  args: {
    children: 'Normal Text',
  },
};

export const Default: Story = {};

export default meta;
