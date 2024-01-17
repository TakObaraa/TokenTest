import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ActionAnchor> = {
  title: 'Atoms/ActionAnchor',
  component: ActionAnchor,
};

type Story = StoryObj<typeof ActionAnchor>;

export const Default: Story = {
  render: () => {
    return <ActionAnchor>ActionAnchor</ActionAnchor>;
  },
};

export default meta;
