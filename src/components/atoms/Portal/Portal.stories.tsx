import Portal from '@atoms/Portal/Portal';
import { Meta, StoryObj } from '@storybook/react';

export default ({
  title: 'Atoms/Portal',
  component: Portal,
} as Meta);

export const Template: StoryObj<typeof Portal> = {
  render: () => {
    return (
      <>
        <Portal open>
          <div>TODO: Portal</div>
        </Portal>
      </>
    );
  },
};
