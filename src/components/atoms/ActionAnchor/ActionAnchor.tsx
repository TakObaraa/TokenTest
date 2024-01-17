// Todo Create test

import Styled from '@emotion/styled';
import { BREAKPOINT, COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

interface Contents {
  onClick?:
    | VoidFunction
    | ((e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void);
  children: React.ReactNode;
}

export type FontSizeOptionType = keyof typeof SIZE.FONT;
export type AnchorColorType = 'blue' | 'red' | 'lightGray' | 'gray';

type Style = {
  setFontSize?: FontSizeOptionType;
  setTabletFontSize?: FontSizeOptionType;
  setMobileFontSize?: FontSizeOptionType;
  setColor?: AnchorColorType;
  setBold?: boolean;
  setMobileBold?: boolean;
  resetLineHeight?: boolean;
  isEllipsis?: boolean;
};

type ActionAnchorProps = Contents &
  Style &
  Pick<HTMLAttributes<HTMLParagraphElement>, 'className'>;

/** StyleComponent */
const Wrapper = Styled('p')<Style>(
  {
    cursor: 'pointer',
    width: 'fit-content',
    maxWidth: '100%',
  },
  ({ setFontSize }) => ({
    fontSize:
      setFontSize === undefined ? SIZE.FONT._14 : SIZE.FONT[setFontSize],
  }),
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
  ({ setBold }) => ({
    fontWeight: setBold === true ? 'bold' : 'normal',
  }),
  ({ setMobileBold }) => ({
    [BREAKPOINT.MOBILE]: {
      fontWeight: setMobileBold ? 'bold' : 'normal',
    },
  }),
  ({ setColor }) =>
    setColor === 'red' && {
      color: COLOR.FONT.DANGER,
    },
  ({ resetLineHeight }) => ({
    lineHeight: !resetLineHeight
      ? SIZE.LINEHEIGHT.DEFAULT
      : SIZE.LINEHEIGHT.RESET,
  }),
  ({ setColor }) =>
    setColor === 'blue' && {
      color: COLOR.FONT.LINK,
      ':hover': {
        color: COLOR.FONT.LINK_HOVER,
        textDecoration: 'underline',
      },
    },
  ({ setColor }) =>
    setColor === 'lightGray' && {
      color: COLOR.FONT.GRAY_400,
      ':hover': {
        textDecoration: 'underline',
      },
    },
  ({ setColor }) =>
    setColor === 'gray' && {
      color: COLOR.FONT.GRAY_700,
      ':hover': {
        textDecoration: 'underline',
      },
    },
  ({ isEllipsis }) =>
    isEllipsis && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
);

/** ReactComponent */
const ActionAnchor: React.FC<ActionAnchorProps> = ({
  onClick,
  className,
  children,
  setFontSize,
  setTabletFontSize,
  setMobileFontSize,
  setColor,
  setBold,
  setMobileBold,
  resetLineHeight,
  isEllipsis,
}) => (
  <Wrapper
    className={className}
    onClick={onClick}
    setFontSize={setFontSize}
    setBold={setBold}
    setMobileBold={setMobileBold}
    setTabletFontSize={setTabletFontSize}
    setMobileFontSize={setMobileFontSize}
    setColor={setColor}
    resetLineHeight={resetLineHeight}
    isEllipsis={isEllipsis}
  >
    {children}
  </Wrapper>
);

export default ActionAnchor;

ActionAnchor.defaultProps = {
  onClick: undefined,
  setFontSize: '_14',
  setTabletFontSize: undefined,
  setMobileFontSize: undefined,
  setBold: undefined,
  resetLineHeight: true,
  setColor: 'blue',
  isEllipsis: false,
};
