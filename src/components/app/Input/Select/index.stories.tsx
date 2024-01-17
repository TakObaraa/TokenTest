import type { Meta, StoryObj } from '@storybook/react';
import Select from '.';

type ComponentType = typeof Select;

const meta: Meta<ComponentType> = {
  component: Select,
  args: {
    placeholder: 'Select',
    error: false,
    disabled: false,
    data: [
      'たんぽぽ事業所',
      'あじさい事業所',
      'ひまわり事業所',
      'あさがお事業所',
    ],
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
      <Select {...args} error />
      <h2>disabled</h2>
      <Select {...args} disabled />
    </>
  ),
};

export default meta;
