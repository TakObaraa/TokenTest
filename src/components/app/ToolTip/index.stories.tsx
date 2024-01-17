import { Meta, StoryObj } from '@storybook/react';
import ToolTip from '.';

export default ({
  component: ToolTip,
  args: { children: 'ToolTip' },
} as Meta);

export const Template: StoryObj<typeof ToolTip> = {};
