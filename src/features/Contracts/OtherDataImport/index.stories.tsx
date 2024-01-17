import type { Meta, StoryObj } from '@storybook/react';
import OtherDataImport from '.';

type ComponentType = typeof OtherDataImport;

const meta: Meta<ComponentType> = {
  component: OtherDataImport,
};

type Story = StoryObj<ComponentType>;

export const Default: Story = {};

export default meta;
