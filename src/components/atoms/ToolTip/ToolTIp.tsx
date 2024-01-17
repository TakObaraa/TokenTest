import styled from '@emotion/styled';
import { BOXSHADOW, COLOR, SIZE } from '@styles/constant';
import React, { HtmlHTMLAttributes } from 'react';

type ToolTipProps = Pick<
  HtmlHTMLAttributes<HTMLDivElement>,
  'className' | 'children'
>;

/** StyleComponent */
const Wrapper = styled('div')({
  padding: SIZE.PADDING._8,
  backgroundColor: COLOR.BACKGROUND.GRAY_0,
  border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  borderRadius: SIZE.RADIUS.DEFAULT,
  boxShadow: BOXSHADOW.MIDDLE,
});
/** ReactComponent */
const ToolTip: React.FC<ToolTipProps> = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

// コンポーネントをエクスポートする
export default ToolTip;
