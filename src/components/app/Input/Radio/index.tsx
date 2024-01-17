import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

type Props = React.ComponentProps<'input'> & {
  resetLineHeight?: boolean;
};

const Wrapper = styled('label')<Props>(({ resetLineHeight, theme }) => ({
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: resetLineHeight
    ? theme.lineHeights.reset
    : theme.lineHeights.default,
}));

const Input = styled('input')(({ theme }) => ({
  width: '12px',
  height: '12px',
  cursor: 'pointer',
  /**
   * NOTE: ラジオボタン + テキストで使うケースが多いため、デフォルトのmarginを指定。
   *       marginが不要な場合はスタイルを上書きしてください。（例: ラジオボタンのみで使うケース）
   */
  margin: `${theme.spacings.none} ${theme.spacings.xs} ${theme.spacings.none} ${theme.spacings.none}`,
}));

const Radio = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      children,
      resetLineHeight = true,
      ...props
    },
    ref,
  ) => (
    <Wrapper
      className={className}
      resetLineHeight={resetLineHeight}
    >
      <Input type="radio"  ref={ref} {...props} />
      {children}
    </Wrapper>
  ),
);

export default Radio;
