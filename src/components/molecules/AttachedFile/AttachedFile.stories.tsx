import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import AttachedFile, { AttachedFileProps } from './AttachedFile';

const meta: Meta<AttachedFileProps> = {
  title: 'Molecules/AttachedFile',
  component: AttachedFile,
  parameters: { controls: { hideNoControlsWarning: true } },
  args: {
    src: '/src/assets/img/dummy.png',
    fileName: '添付済みの画像.jpg',
    onDelete: action('onDelete'),
  },
};

export default meta;
type Story = StoryObj<AttachedFileProps>;

export const Default: Story = {
  render: ({ ...props }) => <AttachedFile {...props} />,
};
