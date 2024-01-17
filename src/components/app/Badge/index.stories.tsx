import Badge from '@app/Badge';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    count: 4,
  },
};

export const Default: StoryObj<typeof Badge> = {};

export const Over100: StoryObj<typeof Badge> = {
  args: {
    count: 100,
  },
};

export default meta;
