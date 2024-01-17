import { Meta, StoryObj } from '@storybook/react';
import List from '.';

type ListType = typeof List.Item;

const meta: Meta<ListType> = {
  component: List.Item,
  args: {},
};

export const Default: StoryObj<ListType> = {
  render: () => {
    return (
      <List>
        <List.Item>Normal ListText1</List.Item>
        <List.Item>Normal ListText2</List.Item>
      </List>
    );
  },
};

export default meta;
