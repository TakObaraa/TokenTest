import { Meta, StoryObj } from '@storybook/react';
import Portal from '.';

type PortalProps = React.ComponentProps<typeof Portal>;

const meta: Meta<PortalProps> = {
  component: Portal,
  parameters: { controls: { hideNoControlsWarning: true } },
  args: {
    children: 'Normal Text',
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<PortalProps>;

export const Default: Story = {
  render: ({ children, ...props }) => <Portal {...props}>{children}</Portal>,
};
