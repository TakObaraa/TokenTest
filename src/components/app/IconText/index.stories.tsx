import Paragraph from '@app/Paragraph';
import { IconAlert } from '@app/icons/normal';
import type { Meta, StoryObj } from '@storybook/react';
import IconText from '.';

type ComponentType = typeof IconText;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
  component: IconText,
  args: {
    icon: <IconAlert />,
    children: <Paragraph>IconText</Paragraph>,
  },
};

export const Default: Story = {};

export default meta;
