import ToolTip from '@atoms/ToolTip/ToolTIp';
import { Meta, StoryObj } from '@storybook/react';

export default ({
  title: 'Atoms/ToolTip',
  component: ToolTip,
} as Meta);

export const Template: StoryObj<typeof ToolTip> = {
  render: () => {
    return (
      <>
        <ToolTip>ToolTip</ToolTip>
      </>
    );
  },
};
