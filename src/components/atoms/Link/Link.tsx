import Styled from '@emotion/styled';
import { BREAKPOINT, COLOR, SIZE } from '@styles/constant';
// Todo React-domの方とごっちゃになるのでAnchorとかに名前変えたい
import React, { AnchorHTMLAttributes } from 'react';

export type LinkColorType = 'default' | 'danger' | 'finish' | 'disabled';
export type FontSizeOptionType =
  | '_10'
  | '_12'
  | '_14'
  | '_16'
  | '_18'
  | '_20'
  | '_24'
  | '_32'
  | '_48';

type Styles = {
  setColor?: LinkColorType;
  setFontSize?: FontSizeOptionType;
  setTabletFontSize?: FontSizeOptionType;
  setMobileFontSize?: FontSizeOptionType;
  resetLineHeight?: boolean;
  setBold?: boolean;
  setMobileBold?: boolean;
  isEllipsis?: boolean;
};

// Memo: アプリ化で別タブ開く動きがなくなるのでtargetはいらなくなるかも
type LinkProps = Styles &
  Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'target' | 'children' | 'className'
  >;

/** StyledComponent */
const Wrapper = Styled('a')<Styles>(
  ({ setFontSize, resetLineHeight, setBold, setMobileBold, isEllipsis }) => ({
    alignItems: 'baseline',
    textDecoration: 'none',
    color: COLOR.FONT.LINK,
    ':hover': {
      color: COLOR.FONT.LINK_HOVER,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    fontSize:
      setFontSize === undefined ? SIZE.FONT._14 : SIZE.FONT[setFontSize],
    lineHeight: !resetLineHeight
      ? SIZE.LINEHEIGHT.DEFAULT
      : SIZE.LINEHEIGHT.RESET,
    overflow: isEllipsis ? 'hidden' : 'visible',
    textOverflow: isEllipsis ? 'ellipsis' : 'clip',
    whiteSpace: isEllipsis ? 'nowrap' : 'normal',
    fontWeight: setBold ? 'bold' : 'normal',
    [BREAKPOINT.MOBILE]: {
      fontWeight: setMobileBold ? 'bold' : 'normal',
    },
  }),
  ({ setColor }) =>
    setColor === 'default' && {
      color: COLOR.FONT.LINK,
      ':hover': {
        color: COLOR.FONT.LINK_HOVER,
      },
    },
  ({ setColor }) =>
    setColor === 'danger' && {
      color: COLOR.FONT.DANGER,
      ':hover': {
        color: COLOR.FONT.DANGER,
      },
    },
  ({ setColor }) =>
    setColor === 'finish' && {
      // Memo: 終了 is 何？
      color: COLOR.FONT.DISABLED,
      ':hover': {
        color: COLOR.FONT.DISABLED,
      },
    },
  ({ setColor }) =>
    setColor === 'disabled' && {
      color: COLOR.FONT.DISABLED,
      ':hover': {
        color: COLOR.FONT.DISABLED,
        textDecoration: 'none',
        cursor: 'text',
      },
    },
  ({ setTabletFontSize }) =>
    setTabletFontSize && {
      [BREAKPOINT.TABLET]: {
        fontSize: SIZE.FONT[setTabletFontSize],
      },
    },
  ({ setMobileFontSize }) =>
    setMobileFontSize && {
      [BREAKPOINT.MOBILE]: {
        fontSize: SIZE.FONT[setMobileFontSize],
      },
    },
);

/** ReactComponent */
const Link: React.FC<LinkProps> = ({
  setColor,
  setFontSize,
  setTabletFontSize,
  setMobileFontSize,
  resetLineHeight,
  setBold,
  setMobileBold,
  isEllipsis,
  children,
  className,
  target,
}) => (
  <Wrapper
    setColor={setColor}
    setFontSize={setFontSize}
    setTabletFontSize={setTabletFontSize}
    setMobileFontSize={setMobileFontSize}
    resetLineHeight={resetLineHeight}
    setBold={setBold}
    setMobileBold={setMobileBold}
    isEllipsis={isEllipsis}
    className={className}
    target={target}
  >
    {children}
  </Wrapper>
);

// 初期値を設定する
Link.defaultProps = {
  setColor: 'default',
  setFontSize: '_14',
  setTabletFontSize: undefined,
  setMobileFontSize: undefined,
  resetLineHeight: true,
  setBold: false,
  setMobileBold: false,
  isEllipsis: false,
};

// コンポーネントをエクスポートする
export default Link;
