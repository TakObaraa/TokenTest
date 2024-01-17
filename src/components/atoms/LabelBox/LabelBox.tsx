import Styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

export type setLabelColorType =
  | 'primary'
  | 'warning'
  | 'finish'
  | 'success'
  | 'info'
  | 'danger';
export type setLabelSizeType = 'small' | 'default';

type Style = {
  setLabelColor?: setLabelColorType;
  setSize?: setLabelSizeType;
};

type Content = {
  children: string;
};

type LabelBoxProps = Style &
  Content &
  Pick<HTMLAttributes<HTMLParagraphElement>, 'className' | 'onClick'>;

/** StyleComponent */
const Wrapper = Styled('p')<Style>(
  {
    display: 'inline-flex',
    alignItems: 'center',
    height: 'fit-content',
    fontSize: SIZE.FONT._12,
    lineHeight: SIZE.LINEHEIGHT.DEFAULT,
    padding: `${SIZE.PADDING._4} ${SIZE.PADDING._8}`,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    borderRadius: SIZE.RADIUS.DEFAULT,
  },
  ({ setLabelColor }) =>
    setLabelColor === 'primary' && {
      color: COLOR.FONT.GRAY_0,
      backgroundColor: COLOR.BACKGROUND.BLUE_600,
    },
  ({ setLabelColor }) =>
    setLabelColor === 'warning' && {
      color: COLOR.FONT.GRAY_0,
      backgroundColor: COLOR.BACKGROUND.ORANGE_600,
    },
  ({ setLabelColor }) =>
    setLabelColor === 'finish' && {
      color: COLOR.FONT.GRAY_0,
      backgroundColor: COLOR.BACKGROUND.GRAY_700,
    },
  ({ setLabelColor }) =>
    setLabelColor === 'success' && {
      color: COLOR.FONT.GRAY_0,
      backgroundColor: COLOR.BACKGROUND.SUCCESS,
    },
  ({ setLabelColor }) =>
    setLabelColor === 'info' && {
      color: COLOR.FONT.GRAY_0,
      backgroundColor: COLOR.BACKGROUND.SKY_500,
    },
  ({ setLabelColor }) =>
    setLabelColor === 'danger' && {
      color: COLOR.FONT.GRAY_0,
      backgroundColor: COLOR.BACKGROUND.RED_600,
    },
  ({ setSize }) =>
    setSize === 'small' && {
      padding: `${SIZE.PADDING._1} ${SIZE.PADDING._8}`,
    },
);

/** ReactComponent */
const LabelBox: React.FC<LabelBoxProps> = ({
  children,
  className,
  setLabelColor,
  setSize,
  onClick,
}) => (
  <Wrapper
    className={className}
    setLabelColor={setLabelColor}
    setSize={setSize}
    onClick={onClick}
  >
    {children}
  </Wrapper>
);

LabelBox.defaultProps = {
  setLabelColor: 'primary',
  setSize: 'default',
};

export default LabelBox;
