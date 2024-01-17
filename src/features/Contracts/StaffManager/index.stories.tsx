import { Meta, StoryObj } from '@storybook/react';
import StaffManager from '.';

const meta: Meta<typeof StaffManager> = {
  component: StaffManager,
  args: {},
};

export default meta;

export const Default: StoryObj<typeof StaffManager> = {};
