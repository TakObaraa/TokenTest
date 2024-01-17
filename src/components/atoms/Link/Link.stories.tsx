import Link from '@atoms/Link/Link';
import { Meta, StoryObj } from '@storybook/react';

export default ({
  title: 'Atoms/Link',
  component: Link,
} as Meta);

export const Template: StoryObj = {
  render: () => {
    return (
      <>
        <Link target="https://google.com">Link</Link>
      </>
    );
  },
};
