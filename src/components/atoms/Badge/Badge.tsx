import styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { HtmlHTMLAttributes } from 'react';

type Contents = {
  count?: number;
};

type BadgeProps = Pick<HtmlHTMLAttributes<HTMLSpanElement>, 'className'> &
  Contents;

/** StyleComponent */
const Wrapper = styled.span<{ count?: number }>(
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'max-content',
    minWidth: '16px',
    padding: `${SIZE.PADDING._2}`,
    fontSize: SIZE.FONT._10,
    fontWeight: 'normal',
    color: COLOR.FONT.GRAY_0,
    lineHeight: SIZE.LINEHEIGHT.RESET,
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    backgroundColor: COLOR.BACKGROUND.RED_700,
    borderRadius: '10px',
  },
  ({ count }) =>
    count === undefined && {
      minWidth: '10px',
      height: '10px',
    },
);

/** ReactComponent */
const Badge: React.FC<BadgeProps> = ({ className, count }) => (
  <Wrapper className={className} count={count}>
    {count && (count < 100 ? count : '99+')}
  </Wrapper>
);

// コンポーネントをエクスポートする
export default Badge;

Badge.defaultProps = {
  count: undefined,
};
