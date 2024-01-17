import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import AttachedFile from '.';

type ComponentType = typeof AttachedFile;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
  component: AttachedFile,
  args: {
    src: '/src/assets/img/dummy.png',
    fileName: '添付済みの画像.jpg',
    onDelete: action('onDelete'),
  },
};

export const Default: Story = {};

export default meta;
