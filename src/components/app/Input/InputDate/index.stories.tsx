import type { Meta, StoryObj } from '@storybook/react';
import InputDate from '.';

type ComponentType = typeof InputDate;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
  component: InputDate,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['default', 'range', 'multiple'],
      defaultValue: 'default',
    },
  },
  args: {
    type: 'default',
    placeholder: 'InputDate',
    error: false,
    disabled: false,
  },
};

export const Default: Story = {};
export const ErrorVariant: Story = {
  args: {
    error: true,
  },
};
export const DisabledVariant: Story = {
  args: {
    disabled: true,
  },
};

export default meta;
