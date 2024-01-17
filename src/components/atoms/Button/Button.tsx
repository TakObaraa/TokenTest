import styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';
import Icon, {
  ColorType as IconColorType,
  IconNameType,
  SizeType as IconSizeType,
} from '../Icon/Icon';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'dark'
  | 'warning'
  | 'danger'
  | 'other'
  | 'info'
  | 'receiver'
  | 'success'
  | 'succeed';

export type ButtonSizeOptionType =
  | 'small'
  | 'middle'
  | 'large'
  | 'wide'
  | 'default';

type Style = {
  setType?: ButtonType;
  setSize?: ButtonSizeOptionType;
};
type Contents = {
  isDisable?: boolean;
  iconName?: IconNameType;
  // isIconButton?: boolean;
  setIconPosition?: 'left' | 'right';
  children?: React.ReactNode;
};

type ButtonProps = Pick<
  HTMLAttributes<HTMLButtonElement>,
  'className' | 'onClick'
> &
  Style &
  Contents;

const IconColor: { [key in ButtonType]: IconColorType } = {
  primary: 'white',
  secondary: 'blue',
  light: 'blue',
  dark: 'white',
  warning: 'white',
  danger: 'white',
  other: 'default',
  info: 'white',
  receiver: 'white',
  success: 'white',
  succeed: 'white',
};
const IconSize: { [key: string]: IconSizeType } = {
  small: '_10',
  middle: '_12',
  large: '_16',
  wide: '_12',
  default: '_12',
};

/** StyledComponent */
const Wrapper = styled('button')<
  Pick<ButtonProps, 'setSize' | 'setType' | 'isDisable' | 'setIconPosition'>
>(
  {
    display: 'inline-flex',
    width: 'fit-content',
    height: 'fit-content',
    lineHeight: SIZE.LINEHEIGHT.DEFAULT,
    borderRadius: SIZE.RADIUS.DEFAULT,
    userSelect: 'none',
    touchAction: 'manipulation',
    fontSize: SIZE.FONT._12,
    textAlign: 'center',
    alignItems: 'center',
    border: `${SIZE.BORDER._1} solid transparent`,
    whiteSpace: 'nowrap',
    ':hover': {
      cursor: 'pointer',
    },
    gap: SIZE.GAP._4,
  },
  ({ setSize }) => {
    switch (setSize) {
      case 'small':
        return {
          padding: `${SIZE.PADDING._1} ${SIZE.PADDING._4}`,
        };
      case 'middle':
        return {
          padding: `${SIZE.PADDING._8} ${SIZE.PADDING._12}`,
        };
      case 'large':
        return {
          padding: `${SIZE.PADDING._8} ${SIZE.PADDING._16}`,
          fontSize: SIZE.FONT._18,
        };
      case 'wide':
        return {
          padding: `${SIZE.PADDING._4} ${SIZE.PADDING._16}`,
        };
      case 'default':
        return {
          padding: `${SIZE.PADDING._4} ${SIZE.PADDING._8}`,
        };

      default:
        return {
          padding: `${SIZE.PADDING._4} ${SIZE.PADDING._8}`,
        };
    }
  },

  ({ setType }) => {
    switch (setType) {
      case 'primary':
        return {
          color: COLOR.FONT.GRAY_0,
          background: COLOR.BACKGROUND.BLUE_600,
          borderColor: COLOR.BORDER.BLUE_700,
          ':hover': {
            color: COLOR.FONT.GRAY_0,
            background: COLOR.BACKGROUND.BLUE_700,
            borderColor: COLOR.BORDER.BLUE_800,
          },
        };
      case 'secondary':
        return {
          background: COLOR.BACKGROUND.GRAY_50,
          borderColor: COLOR.BORDER.GRAY_200,
          color: COLOR.FONT.LINK,
          ':hover': {
            color: COLOR.FONT.LINK_HOVER,
          },
        };
      case 'light':
        return {
          color: COLOR.FONT.LINK,
          background: COLOR.BACKGROUND.GRAY_0,
          borderColor: COLOR.BORDER.DEFAULT,
          ':hover': {
            color: COLOR.FONT.LINK_HOVER,
            background: COLOR.BACKGROUND.GRAY_10,
            borderColor: COLOR.BORDER.DEFAULT,
          },
        };
      case 'dark':
        return {
          color: COLOR.FONT.GRAY_0,
          background: COLOR.BACKGROUND.GRAY_600,
          borderColor: COLOR.BORDER.GRAY_400,
          ':hover': {
            color: COLOR.FONT.GRAY_0,
            background: COLOR.BACKGROUND.GRAY_500,
            borderColor: COLOR.BORDER.GRAY_400,
          },
        };
      case 'warning':
        return {
          color: COLOR.FONT.GRAY_0,
          background: COLOR.BACKGROUND.WARNING,
          borderColor: COLOR.BORDER.ORANGE_600,
          ':hover': {
            color: COLOR.FONT.GRAY_0,
            background: COLOR.BACKGROUND.ORANGE_600,
            borderColor: COLOR.BORDER.ORANGE_700,
          },
        };
      case 'danger':
        return {
          color: COLOR.FONT.GRAY_0,
          background: COLOR.BACKGROUND.DANGER,
          borderColor: COLOR.BORDER.RED_800,
          ':hover': {
            color: COLOR.FONT.GRAY_0,
            background: COLOR.BACKGROUND.RED_700,
            borderColor: COLOR.BORDER.RED_800,
          },
        };
      case 'other':
        return {
          color: COLOR.FONT.GRAY_700,
          background: COLOR.BACKGROUND.GRAY_0,
          borderColor: COLOR.BORDER.DEFAULT,
          ':hover': {
            color: COLOR.FONT.GRAY_700,
            background: COLOR.BACKGROUND.GRAY_50,
            borderColor: COLOR.BORDER.DEFAULT,
          },
        };
      case 'info':
        return {
          color: COLOR.FONT.GRAY_0,
          background: COLOR.BACKGROUND.SKY_500,
          borderColor: COLOR.BORDER.SKY_700,
          ':hover': {
            color: COLOR.FONT.GRAY_0,
            background: COLOR.BACKGROUND.SKY_600,
            borderColor: COLOR.BORDER.SKY_700,
          },
        };
      case 'receiver':
        return {
          color: COLOR.FONT.GRAY_0,
          background: COLOR.BACKGROUND.GREEN_900,
          borderColor: COLOR.BORDER.BLUE_700,
          ':hover': {
            color: COLOR.FONT.GRAY_0,
            background: COLOR.BACKGROUND.GREEN_900,
            borderColor: COLOR.BORDER.BLUE_800,
          },
        };
      case 'success':
        return {
          color: COLOR.FONT.GRAY_0,
          background: COLOR.BACKGROUND.SUCCESS,
          borderColor: 'none',
          ':hover': {
            color: COLOR.FONT.GRAY_0,
            background: COLOR.BACKGROUND.GREEN_800,
            borderColor: 'none',
          },
        };
      case 'succeed':
        return {
          color: COLOR.FONT.GRAY_0,
          background: COLOR.BACKGROUND.GREEN_800,
          borderColor: 'none',
          ':hover': {
            color: COLOR.FONT.GRAY_0,
            background: COLOR.BACKGROUND.SUCCESS,
            borderColor: 'none',
          },
        };
      default:
        return {};
    }
  },
  ({ isDisable }) =>
    isDisable && {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      opacity: '0.65',
      boxShadow: 'none',
    },
  ({ setIconPosition }) =>
    setIconPosition === 'right' && {
      flexDirection: 'row-reverse',
    },
);

const Button: React.FC<ButtonProps> = ({
  className,
  setType,
  isDisable,
  setSize,
  setIconPosition,
  onClick,
  iconName,
  children,
}) => (
  <Wrapper
    className={className}
    setSize={setSize}
    setType={setType}
    isDisable={isDisable}
    setIconPosition={setIconPosition}
    onClick={onClick}
    type="button"
  >
    {iconName && (
      <Icon
        name={iconName}
        setColor={setType && IconColor[setType]}
        setSize={setSize ? IconSize[setSize] : '_12'}
      />
    )}
    {children}
  </Wrapper>
);

Button.defaultProps = {
  setType: 'primary',
  setSize: 'default',
  isDisable: false,
  children: undefined,
  iconName: undefined,
  setIconPosition: 'left',
};

export default Button;
