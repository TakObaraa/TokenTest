import { Meta, StoryObj } from '@storybook/react';
import OtherDataImportFacilityCard from 'src/features/Contracts/Contract/OtherDataImportFacilityCard';

const meta: Meta<typeof OtherDataImportFacilityCard> = {
  component: OtherDataImportFacilityCard,
  args: {
    onOtherDataImportFacilityMenu: () => {},
    openToolTip: false,
    onDetailModal: () => {},
    onUsingSetting: () => {},
    otherDataImportFacilityRadioSelect: () => {},
    useSystem: 'pro',
    onAdd: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof OtherDataImportFacilityCard>;

export const Pro: Story = {};

export const Com: Story = {
  args: {
    useSystem: 'com',
  },
};

export const OpenToolTip: Story = {
  args: {
    openToolTip: true,
  },
};
