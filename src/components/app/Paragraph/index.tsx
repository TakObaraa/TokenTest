import styled from '@emotion/styled';
import { ColorsType, FontSizesType } from '@styles/themes/types';
import React, { forwardRef } from 'react';

type BaseProps = Omit<React.ComponentProps<'p'>, 'style'> & {
  isEllipsis?: boolean;
  isPreWrap?: boolean;
  resetLineHeight?: boolean;
  setBold?: boolean;
  setColor?: keyof ColorsType['font'];
  setSize?: keyof FontSizesType;
};

const Wrapper = styled('p')<BaseProps>(
  ({ setColor, setSize, setBold, resetLineHeight, theme }) => ({
    color: setColor === undefined ? undefined : theme.colors.font[setColor],
    fontSize: setSize === undefined ? 'inherit' : theme.fontSizes[setSize],
    fontWeight: setBold ? 'bold' : 'normal',
    lineHeight: resetLineHeight
      ? theme.lineHeights.reset
      : theme.lineHeights.default,
  }),
  ({ isEllipsis }) => ({
    overflow: isEllipsis ? 'hidden' : 'visible',
    textOverflow: isEllipsis ? 'ellipsis' : 'clip',
  }),
  ({ isEllipsis }) => isEllipsis && { whiteSpace: 'nowrap' },
  ({ isPreWrap }) => isPreWrap && { whiteSpace: 'pre-wrap' },
);

const Paragraph = forwardRef<HTMLParagraphElement, BaseProps>(
  (
    {
      setColor = 'default',
      setSize = 'sm',
      resetLineHeight = false,
      isEllipsis = false,
      isPreWrap = false,
      children,
      ...props
    },
    ref,
  ) => (
    <Wrapper
      ref={ref}
      setColor={setColor}
      setSize={setSize}
      resetLineHeight={resetLineHeight}
      isEllipsis={isEllipsis}
      isPreWrap={isPreWrap}
      {...props}
    >
      {children}
    </Wrapper>
  ),
);

export default Paragraph;
