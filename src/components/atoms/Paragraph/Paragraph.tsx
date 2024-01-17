import Styled from '@emotion/styled';
import { BREAKPOINT, COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

export type TextColorType =
  | 'default'
  | 'gray'
  | 'lightGray'
  | 'ash'
  | 'white'
  | 'blue'
  | 'success'
  | 'danger';

export type FontSizeOptionType = keyof typeof SIZE.FONT;
/** Memo
 * BREAKPOINTでテキストサイズを切り替えると大変なので、Propsで受け取れるようにする
 * 基本的にはコンポーネントの呼び出し先でBREAKPOINTの切り替えを行うがAtoms単位のコンポーネントであればものによってはPropsで渡すのもありかも
 * 要検討
 */
interface Style {
  setFontSize?: FontSizeOptionType;
  setTabletFontSize?: FontSizeOptionType;
  setMobileFontSize?: FontSizeOptionType;
  setColor?: TextColorType;
  setTabletColor?: TextColorType;
  setMobileColor?: TextColorType;
  setBold?: boolean;
  setTabletBold?: boolean;
  setMobileBold?: boolean;
  resetLineHeight?: boolean;
  isEllipsis?: boolean;
  isPreWrap?: boolean;
}

interface Content {
  onClick?: () => void;
  children: React.ReactNode;
}

type ParagraphProps = Style &
  Content &
  Pick<HTMLAttributes<HTMLParagraphElement>, 'className'>;

const ColorMap: Record<TextColorType, string> = {
  default: COLOR.FONT.DEFAULT,
  gray: COLOR.FONT.GRAY_700,
  lightGray: COLOR.FONT.GRAY_400,
  ash: COLOR.FONT.GRAY_500,
  white: COLOR.FONT.GRAY_0,
  blue: COLOR.FONT.LINK, // リンクと被るので後で消すかも
  success: COLOR.FONT.SUCCESS,
  danger: COLOR.FONT.DANGER,
};

/** StyleComponent */
const Wrapper = Styled('p')<Style>(
  ({ setColor, setFontSize, setBold, resetLineHeight }) => ({
    color: setColor === undefined ? undefined : ColorMap[setColor],
    fontSize: setFontSize === undefined ? 'inherit' : SIZE.FONT[setFontSize],
    fontWeight: setBold ? 'bold' : 'normal',
    lineHeight: !resetLineHeight
      ? SIZE.LINEHEIGHT.DEFAULT
      : SIZE.LINEHEIGHT.RESET,
  }),
  ({ setTabletColor }) =>
    setTabletColor && {
      [BREAKPOINT.TABLET]: {
        color: ColorMap[setTabletColor],
      },
    },
  ({ setMobileColor }) =>
    setMobileColor && {
      [BREAKPOINT.MOBILE]: {
        color: ColorMap[setMobileColor],
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
  ({ setTabletBold }) =>
    setTabletBold && {
      [BREAKPOINT.TABLET]: {
        fontWeight: 'bold',
      },
    },
  ({ setMobileBold }) =>
    setMobileBold && {
      [BREAKPOINT.MOBILE]: {
        fontWeight: 'bold',
      },
    },
  ({ isEllipsis }) => ({
    overflow: isEllipsis ? 'hidden' : 'visible',
    textOverflow: isEllipsis ? 'ellipsis' : 'clip',
  }),
  ({ isEllipsis }) => isEllipsis && { whiteSpace: 'nowrap' },
  ({ isPreWrap }) => isPreWrap && { whiteSpace: 'pre-wrap' },
);

/** ReactComponent */
const Paragraph: React.FC<ParagraphProps> = ({
  className,
  setFontSize,
  setTabletFontSize,
  setMobileFontSize,
  setColor,
  setTabletColor,
  setMobileColor,
  setBold,
  setTabletBold,
  setMobileBold,
  resetLineHeight,
  isEllipsis,
  isPreWrap,
  children,
  onClick,
}) => (
  <Wrapper
    className={className}
    setColor={setColor}
    setTabletColor={setTabletColor}
    setMobileColor={setMobileColor}
    setFontSize={setFontSize}
    setTabletFontSize={setTabletFontSize}
    setMobileFontSize={setMobileFontSize}
    setBold={setBold}
    setTabletBold={setTabletBold}
    setMobileBold={setMobileBold}
    resetLineHeight={resetLineHeight}
    isEllipsis={isEllipsis}
    isPreWrap={isPreWrap}
    onClick={onClick}
  >
    {children}
  </Wrapper>
);

Paragraph.defaultProps = {
  setFontSize: '_14',
  setTabletFontSize: undefined,
  setMobileFontSize: undefined,
  setColor: 'default',
  setTabletColor: undefined,
  setMobileColor: undefined,
  setBold: false,
  setTabletBold: undefined,
  setMobileBold: undefined,
  resetLineHeight: false,
  isEllipsis: false,
  isPreWrap: false,
  onClick: undefined,
};

export default Paragraph;
