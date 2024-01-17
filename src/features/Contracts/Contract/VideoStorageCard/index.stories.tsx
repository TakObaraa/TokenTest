import { Meta, StoryObj } from '@storybook/react';
import VideoStorageCard from 'src/features/Contracts/Contract/VideoStorageCard';

const meta: Meta<typeof VideoStorageCard> = {
  component: VideoStorageCard,
};

export default meta;

type Story = StoryObj<typeof VideoStorageCard>;

export const Default: Story = {};
