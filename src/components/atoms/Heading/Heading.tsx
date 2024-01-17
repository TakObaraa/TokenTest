import { css } from '@emotion/react';
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
type Style = {
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
};

type Content = {
  setType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  isActionAnchor?: boolean;
  children: React.ReactNode;
};

type HeadingProps = Style &
  Content &
  Pick<HTMLAttributes<HTMLHeadingElement>, 'className'>;

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
const HeadingStyle = (props: Style & { isActionAnchor?: boolean }) =>
  css(
    {
      color:
        props.setColor === undefined ? undefined : ColorMap[props.setColor],
      fontWeight: props.setBold ? 'bold' : 'normal',
      lineHeight: !props.resetLineHeight
        ? SIZE.LINEHEIGHT.DEFAULT
        : SIZE.LINEHEIGHT.RESET,
      overflow: props.isEllipsis ? 'hidden' : 'visible',
      textOverflow: props.isEllipsis ? 'ellipsis' : 'clip',
    },
    props.setTabletColor && {
      [BREAKPOINT.TABLET]: {
        color: ColorMap[props.setTabletColor],
      },
    },
    props.setMobileColor && {
      [BREAKPOINT.MOBILE]: {
        color: ColorMap[props.setMobileColor],
      },
    },
    props.setTabletFontSize && {
      [BREAKPOINT.TABLET]: {
        fontSize: SIZE.FONT[props.setTabletFontSize],
      },
    },
    props.setMobileFontSize && {
      [BREAKPOINT.MOBILE]: {
        fontSize: SIZE.FONT[props.setMobileFontSize],
      },
    },
    props.setTabletBold && {
      [BREAKPOINT.TABLET]: {
        fontWeight: 'bold',
      },
    },
    props.setMobileBold && {
      [BREAKPOINT.MOBILE]: {
        fontWeight: 'bold',
      },
    },
    props.isEllipsis && { whiteSpace: 'nowrap' },
    props.isPreWrap && { whiteSpace: 'pre-wrap' },
    props.isActionAnchor && {
      cursor: 'pointer',
      color: COLOR.FONT.LINK,
      width: 'fit-content',
      ':hover': {
        color: COLOR.FONT.LINK_HOVER,
        textDecoration: 'underline',
      },
    },
  );

const Heading1 = Styled('h1')<{ props: Style & { isActionAnchor?: boolean } }>(
  ({ props }) => ({
    fontSize:
      props.setFontSize === undefined
        ? SIZE.FONT._24
        : SIZE.FONT[props.setFontSize],
  }),
  ({ props }) => HeadingStyle(props),
);
const Heading2 = Styled('h2')<{ props: Style & { isActionAnchor?: boolean } }>(
  ({ props }) => ({
    fontSize:
      props.setFontSize === undefined
        ? SIZE.FONT._20
        : SIZE.FONT[props.setFontSize],
  }),
  ({ props }) => HeadingStyle(props),
);
const Heading3 = Styled('h3')<{ props: Style & { isActionAnchor?: boolean } }>(
  ({ props }) => ({
    fontSize:
      props.setFontSize === undefined
        ? SIZE.FONT._18
        : SIZE.FONT[props.setFontSize],
  }),
  ({ props }) => HeadingStyle(props),
);
const Heading4 = Styled('h4')<{ props: Style & { isActionAnchor?: boolean } }>(
  ({ props }) => ({
    fontSize:
      props.setFontSize === undefined
        ? SIZE.FONT._16
        : SIZE.FONT[props.setFontSize],
  }),
  ({ props }) => HeadingStyle(props),
);
const Heading5 = Styled('h5')<{ props: Style & { isActionAnchor?: boolean } }>(
  ({ props }) => ({
    fontSize:
      props.setFontSize === undefined
        ? SIZE.FONT._14
        : SIZE.FONT[props.setFontSize],
  }),
  ({ props }) => HeadingStyle(props),
);
const Heading6 = Styled('h6')<{ props: Style & { isActionAnchor?: boolean } }>(
  ({ props }) => ({
    fontSize:
      props.setFontSize === undefined
        ? SIZE.FONT._12
        : SIZE.FONT[props.setFontSize],
  }),
  ({ props }) => HeadingStyle(props),
);

/** ReactComponent */
const Heading: React.FC<HeadingProps> = ({
  setType,
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
  isActionAnchor,
  children,
}) => (
  <>
    {setType === 'h1' && (
      <Heading1
        className={className}
        props={{
          isActionAnchor,
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
        }}
      >
        {children}
      </Heading1>
    )}
    {setType === 'h2' && (
      <Heading2
        className={className}
        props={{
          isActionAnchor,
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
        }}
      >
        {children}
      </Heading2>
    )}
    {setType === 'h3' && (
      <Heading3
        className={className}
        props={{
          isActionAnchor,
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
        }}
      >
        {children}
      </Heading3>
    )}
    {setType === 'h4' && (
      <Heading4
        className={className}
        props={{
          isActionAnchor,
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
        }}
      >
        {children}
      </Heading4>
    )}
    {setType === 'h5' && (
      <Heading5
        className={className}
        props={{
          isActionAnchor,
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
        }}
      >
        {children}
      </Heading5>
    )}
    {setType === 'h6' && (
      <Heading6
        className={className}
        props={{
          isActionAnchor,
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
        }}
      >
        {children}
      </Heading6>
    )}
  </>
);

Heading.defaultProps = {
  isActionAnchor: false,
  setFontSize: undefined,
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
};

export default Heading;
