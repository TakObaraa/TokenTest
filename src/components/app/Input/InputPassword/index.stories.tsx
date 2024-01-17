import type { Meta, StoryObj } from '@storybook/react';
import InputPassword from '.';

type ComponentType = typeof InputPassword;

const meta: Meta<ComponentType> = {
  component: InputPassword,
  args: {
    placeholder: 'InputPassword',
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
      <InputPassword {...args} error />
      <h2>disabled</h2>
      <InputPassword {...args} disabled />
    </>
  ),
};

export default meta;
