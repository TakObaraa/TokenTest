import Heading from '@atoms/Heading/Heading';
import { Meta, StoryObj } from '@storybook/react';

export default ({
  title: 'Atoms/Heading',
  component: Heading,
} as Meta);

export const Template: StoryObj = {
  render: () => {
    return (
      <>
        <Heading setType="h1">Heading1</Heading>
        <Heading setType="h2" setBold>
          Heading2
        </Heading>
        <Heading setType="h3">Heading3</Heading>
        <Heading setType="h4">Heading4</Heading>
      </>
    );
  },
};
