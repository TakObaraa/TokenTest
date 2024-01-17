import Paragraph from '@app/Paragraph';
import { IconEdit } from '@app/icons/normal';
import { Meta, StoryObj } from '@storybook/react';
import CheckBox from '.';

type CheckBoxPropsType = typeof CheckBox;

const meta: Meta<CheckBoxPropsType> = {
  component: CheckBox,
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<CheckBoxPropsType>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    children: (
      <>
        <IconEdit />
        <Paragraph>with label</Paragraph>
      </>
    ),
  },
};
