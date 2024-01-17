import { Meta, StoryObj } from '@storybook/react';
import IntroductionFeatureEditModal from 'src/features/Contracts/Contract/IntroductionFeatureEditModal';

const meta: Meta<typeof IntroductionFeatureEditModal> = {
  component: IntroductionFeatureEditModal,
  args: {
    isOpen: true,
    onDidDismiss: () => {},
    useSystem: 'pro',
  },
};

export default meta;

type Story = StoryObj<typeof IntroductionFeatureEditModal>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};
