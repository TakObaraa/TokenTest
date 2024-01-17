import ActionAnchor from '@atoms/ActionAnchor/ActionAnchor';
import ToolTip from '@atoms/ToolTip/ToolTIp';
import Styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { HtmlHTMLAttributes } from 'react';

type Contents = {
  isOpen: boolean;
};

type ToolTipContractMenuProps = Contents &
  Pick<HtmlHTMLAttributes<HTMLDivElement>, 'className' | 'children'>;

/** StyleComponent */
const Wrapper = Styled(ToolTip)<{ isOpen: boolean }>(({ isOpen }) => ({
  padding: SIZE.PADDING._0,
  display: isOpen ? 'block' : 'none',
  position: 'absolute',
  top: '35px',
  right: '7px',
}));
export const ContractPulldownItem = Styled(ActionAnchor)({
  width: '200px',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: SIZE.PADDING._8,
  cursor: 'pointer',
  color: COLOR.FONT.DEFAULT,
  ':visited': {
    color: COLOR.FONT.DEFAULT,
  },
  ':hover': {
    backgroundColor: COLOR.BACKGROUND.GRAY_10,
    color: COLOR.FONT.DEFAULT,
    textDecoration: 'none',
  },
  gap: SIZE.GAP._4,
  ':last-of-type': {
    borderBottom: 'none',
  },
});
export const ContractPulldownGroup = Styled('div')({
  borderBottom: `solid ${COLOR.BORDER.DEFAULT} ${SIZE.BORDER._1}`,
});
/** ReactComponent */
const ToolTipContractMenu: React.FC<ToolTipContractMenuProps> = ({
  className,
  children,
  isOpen,
}) => (
  <Wrapper className={className} isOpen={isOpen}>
    {children}
  </Wrapper>
);

// コンポーネントをエクスポートする
export default ToolTipContractMenu;
