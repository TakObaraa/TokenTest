import type { Meta, StoryObj } from '@storybook/react';
import InputText from '.';

type ComponentType = typeof InputText;

const meta: Meta<ComponentType> = {
  component: InputText,
  args: {
    placeholder: 'InputText',
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
      <InputText {...args} error />
      <h2>disabled</h2>
      <InputText {...args} disabled />
    </>
  ),
};

export default meta;
