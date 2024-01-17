import type { Meta, StoryObj } from '@storybook/react';
import InputNumber from '.';

type ComponentType = typeof InputNumber;

const meta: Meta<ComponentType> = {
  component: InputNumber,
  args: {
    placeholder: 'InputNumber',
    error: false,
    disabled: false,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: [undefined, 'sm', 'md', 'lg'],
      defaultValue: undefined,
    },
  },
};

type Story = StoryObj<ComponentType>;

export const Default: Story = {};

export const Variant: Story = {
  render: (args) => (
    <>
      <h2>error</h2>
      <InputNumber {...args} error />
      <h2>disabled</h2>
      <InputNumber {...args} disabled />
    </>
  ),
};

export default meta;
