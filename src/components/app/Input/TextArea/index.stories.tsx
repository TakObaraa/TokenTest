import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '.';

type ComponentType = typeof TextArea;

const meta: Meta<ComponentType> = {
  component: TextArea,
  args: {
    placeholder: 'TextArea',
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
      <TextArea {...args} error />
      <h2>disabled</h2>
      <TextArea {...args} disabled />
    </>
  ),
};

export default meta;
