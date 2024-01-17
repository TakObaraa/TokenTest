import ActionAnchor from '@app/ActionAnchor';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ActionAnchor> = {
  component: ActionAnchor,
  args: {
    children: 'Anchor',
    to: '/',
    isEllipsis: false,
    resetLineHeight: false,
    setBold: false,
    setFontSize: undefined,
  },
};

export const Default: StoryObj<typeof ActionAnchor> = {};

export const SetEllipsis: StoryObj<typeof ActionAnchor> = {
  args: { isEllipsis: true },
};

export default meta;
