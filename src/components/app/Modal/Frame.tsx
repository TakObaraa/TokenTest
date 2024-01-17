import styled from '@emotion/styled';
import React from 'react';

export type FrameType = 'default' | 'large' | 'dialog' | 'small';

type Props = Pick<React.ComponentProps<'div'>, 'className' | 'children'> & {
  type?: FrameType;
  contentScroll?: boolean;
};

const StyledFrame = styled('div')<Props>(
  ({ contentScroll, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.radius.base,
    margin: '80px auto',
    maxHeight: contentScroll ? 'calc(100% - 64px)' : 'auto',
    width: '600px',
    height: theme.sizes.fit,
    boxShadow: '0 5px 15px rgb(0 0 0 / 50%)',
    [theme.breakpoints.md]: {
      maxHeight: contentScroll ? 'calc(100% - 32px)' : 'auto',
      margin: `${theme.spacings.md} ${theme.spacings.auto}`,
    },
    [theme.breakpoints.sm]: {
      maxWidth: 'calc(100% - 16px)',
      maxHeight: contentScroll ? 'calc(100% - 16px)' : 'auto',
      margin: `${theme.spacings.sm}`,
    },
  }),
  ({ type, theme }) =>
    type === 'dialog' && {
      width: '300px',
      [theme.breakpoints.sm]: {
        width: '300px',
        margin: `${theme.spacings.sm} auto`,
      },
    },
  ({ type, theme }) =>
    type === 'large' && {
      width: '800px',
      [theme.breakpoints.md]: {
        width: '600px',
      },
      [theme.breakpoints.sm]: {
        width: 'calc(100% - 16px)',
      },
    },
  ({ type, theme }) =>
    type === 'small' && {
      width: '300px',
      [theme.breakpoints.sm]: {
        width: '300px',
        margin: `${theme.spacings.sm} auto`,
      },
    },
);

const Frame: React.FC<Props> = ({
  type = 'default',
  contentScroll = false,
  children,
  ...props
}) => (
  <StyledFrame type={type} contentScroll={contentScroll} {...props}>
    {children}
  </StyledFrame>
);

export default Frame;
