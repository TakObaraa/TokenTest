import type { Meta, StoryObj } from '@storybook/react';
import MultiSelect from '.';

type ComponentType = typeof MultiSelect;

const meta: Meta<ComponentType> = {
  component: MultiSelect,
  args: {
    placeholder: 'MultiSelect',
    error: false,
    disabled: false,
    data: [
      {
        group: '法人',
        items: [
          { value: '1', label: '法人A' },
          { value: '2', label: '法人B' },
        ],
      },
      {
        group: '事業所',
        items: [
          { value: '3', label: '事業所A' },
          { value: '4', label: '事業所B' },
        ],
      },
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
      <MultiSelect {...args} error />
      <h2>disabled</h2>
      <MultiSelect {...args} disabled />
    </>
  ),
};

export default meta;
