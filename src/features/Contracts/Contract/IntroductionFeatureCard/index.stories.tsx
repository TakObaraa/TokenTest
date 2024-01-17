import { Meta, StoryObj } from '@storybook/react';
import IntroductionFeatureCard from 'src/features/Contracts/Contract/IntroductionFeatureCard';

const meta: Meta<typeof IntroductionFeatureCard> = {
  component: IntroductionFeatureCard,
  args: {
    useSystem: 'pro',
    onEdit: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof IntroductionFeatureCard>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};
