import styled from '@emotion/styled';
import React from 'react';

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
  width: theme.fontSizes.sm,
  height: theme.fontSizes.sm,
  cursor: 'pointer',
  /**
   * NOTE: チェックボックス + テキストで使うケースが多いため、デフォルトのmarginを指定。
   *       marginが不要な場合はスタイルを上書きしてください。（例: チェックボックスのみで使うケース）
   */
  marginRight: theme.spacings.xs,
}));

const InputCheckBox = React.forwardRef<HTMLInputElement, Props>(
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
      <Input type="checkBox"  ref={ref} {...props} />
      {children}
    </Wrapper>
  ),
);

export default InputCheckBox;
