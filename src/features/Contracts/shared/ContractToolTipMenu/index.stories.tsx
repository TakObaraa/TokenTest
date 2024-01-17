import { Meta, StoryObj } from '@storybook/react';
import ToolTipContractMenu, {
  ContractPulldownGroup,
  ContractPulldownItem,
} from 'src/features/Contracts/shared/ContractToolTipMenu';

const meta: Meta<typeof ToolTipContractMenu> = {
  component: ToolTipContractMenu,
  args: {
    isOpen: true,
  },
};

export default meta;

type Story = StoryObj<typeof ToolTipContractMenu>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      // 画面右端に表示される
      <ToolTipContractMenu {...args}>
        <ContractPulldownGroup>
          <ContractPulldownItem onClick={() => {}}>aaa</ContractPulldownItem>
        </ContractPulldownGroup>
      </ToolTipContractMenu>
    );
  },
};
