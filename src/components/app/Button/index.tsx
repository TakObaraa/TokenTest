import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'dark'
  | 'warning'
  | 'danger'
  | 'other'
  | 'info'
  | 'success';

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

type ButtonProps = Style & React.ComponentProps<'button'>;

/** StyledComponent */
const StyledButton = styled('button')<
  Pick<ButtonProps, 'setSize' | 'setType' | 'disabled'>
>(
  ({ theme }) => ({
    display: 'inline-flex',
    width: 'fit-content',
    height: 'fit-content',
    lineHeight: theme.lineHeights.default,
    borderRadius: theme.radius.base,
    userSelect: 'none',
    touchAction: 'manipulation',
    fontSize: theme.fontSizes.sm,
    textAlign: 'center',
    alignItems: 'center',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
    ':hover': {
      cursor: 'pointer',
    },
    gap: theme.spacings.xs,
  }),
  ({ setSize = 'default', theme }) => {
    if (setSize === 'small')
      return {
        padding: `${theme.spacings['2xs']} ${theme.spacings.xs}`,
      };
    if (setSize === 'middle')
      return {
        padding: `${theme.spacings.sm} ${theme.spacings.md}`,
      };
    if (setSize === 'large')
      return {
        padding: `${theme.spacings.sm} ${theme.spacings.md}`,
        fontSize: theme.fontSizes.xl,
      };
    if (setSize === 'wide')
      return {
        padding: `${theme.spacings.xs} ${theme.spacings.md}`,
      };
    if (setSize === 'default')
      return {
        padding: `${theme.spacings.xs} ${theme.spacings.sm}`,
      };

    return {};
  },

  ({ setType = 'primary', theme }) => {
    if (setType === 'primary')
      return {
        color: theme.colors.white,
        background: theme.colors.primary.main,
        borderColor: theme.colors.primary.dark,
        ':hover': {
          color: theme.colors.white,
          background: theme.colors.primary.dark,
          borderColor: theme.colors.primary.dark,
        },
      };
    if (setType === 'secondary')
      return {
        background: theme.colors.gray._50,
        borderColor: theme.colors.gray._200,
        color: theme.colors.font.link,
        ':hover': {
          color: theme.colors.primary.dark,
        },
      };
    if (setType === 'light')
      return {
        color: theme.colors.font.link,
        background: theme.colors.white,
        borderColor: theme.colors.gray._300,
        ':hover': {
          color: theme.colors.primary.dark,
          background: theme.colors.background.surfaceRaised,
          borderColor: theme.colors.gray._300,
        },
      };
    if (setType === 'dark')
      return {
        color: theme.colors.white,
        background: theme.colors.gray._600,
        borderColor: theme.colors.gray._400,
        ':hover': {
          color: theme.colors.white,
          background: theme.colors.gray._500,
          borderColor: theme.colors.gray._400,
        },
      };
    if (setType === 'warning')
      return {
        color: theme.colors.white,
        background: theme.colors.orange.main,
        borderColor: theme.colors.orange.dark,
        ':hover': {
          color: theme.colors.white,
          background: theme.colors.orange.dark,
          borderColor: theme.colors.orange.dark,
        },
      };
    if (setType === 'danger')
      return {
        color: theme.colors.white,
        background: theme.colors.red.main,
        borderColor: theme.colors.red.dark,
        ':hover': {
          color: theme.colors.white,
          background: theme.colors.red.dark,
          borderColor: theme.colors.red.dark,
        },
      };
    if (setType === 'other')
      return {
        color: theme.colors.gray._700,
        background: theme.colors.white,
        borderColor: theme.colors.gray._300,
        ':hover': {
          color: theme.colors.gray._700,
          background: theme.colors.background.disabled,
          borderColor: theme.colors.gray._300,
        },
      };
    if (setType === 'info')
      return {
        color: theme.colors.white,
        background: theme.colors.sky.main,
        borderColor: theme.colors.sky.dark,
        ':hover': {
          color: theme.colors.font.link,
          background: theme.colors.sky.dark,
          borderColor: theme.colors.sky.dark,
        },
      };
    if (setType === 'success')
      return {
        color: theme.colors.white,
        background: theme.colors.green.main,
        borderColor: theme.colors.transparent,
        ':hover': {
          color: theme.colors.white,
          background: theme.colors.green.dark,
          borderColor: theme.colors.transparent,
        },
      };
    return {};
  },
  ({ disabled = false }) =>
    disabled && {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      opacity: '0.65',
      boxShadow: 'none',
    },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, setType, setSize, children, ...props }, ref) => (
    <StyledButton
      className={className}
      setSize={setSize}
      setType={setType}
      type="button"
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  ),
);

export default Button;
