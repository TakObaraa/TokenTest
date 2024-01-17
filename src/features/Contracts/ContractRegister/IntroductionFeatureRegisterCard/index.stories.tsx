import { Meta, StoryObj } from '@storybook/react';
import IntroductionFeatureRegisterCard from '.';

const meta: Meta<typeof IntroductionFeatureRegisterCard> = {
  component: IntroductionFeatureRegisterCard,
  args: {
    useSystem: 'pro',
  },
};

export default meta;

export const Default: StoryObj<typeof IntroductionFeatureRegisterCard> = {};

export const Com: StoryObj<typeof IntroductionFeatureRegisterCard> = {
  args: {
    useSystem: 'com',
  },
};
