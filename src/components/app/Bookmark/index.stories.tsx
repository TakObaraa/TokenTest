import Bookmark from '@app/Bookmark';
import { Meta, StoryObj } from '@storybook/react';

export default ({
  component: Bookmark,
  argTypes: {
    onclick: { action: 'clicked' },
  },
} as Meta);

export const Default: StoryObj<typeof Bookmark> = {};

export const IsActive: StoryObj<typeof Bookmark> = {
  args: {
    isActive: true,
  },
};
