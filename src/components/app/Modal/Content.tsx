import styled from '@emotion/styled';
import React from 'react';

type BaseContentProps = Pick<
  React.ComponentProps<'div'>,
  'className' | 'children'
> & {
  resetPadding?: boolean;
  scroll?: boolean;
};

const StyledContent = styled('div')<BaseContentProps>(
  ({ resetPadding, scroll, theme }) => ({
    backgroundColor: theme.colors.white,
    padding: resetPadding ? theme.spacings.sm : theme.spacings.md,
    maxHeight: scroll ? '100%' : 'auto',
    overflowY: scroll ? 'scroll' : 'visible',
  }),
);

const Content: React.FC<BaseContentProps> = ({ children, ...props }) => (
  <StyledContent {...props}>{children}</StyledContent>
);

export default Content;
export type ContentProps = React.ComponentProps<typeof Content>;

/** *****************************************************************************
 * Content内で利用可能な部品コンポーネント
 ***************************************************************************** */

type BaseContentFormProps = Pick<
  React.ComponentProps<'div'>,
  'className' | 'children'
> & {
  // NOTE: 必要に応じて追加
};

const StyledContentForm = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacings.md,
}));

/**
 * 入力フォームのレイアウトを提供するコンポーネントです
 */
export const ContentForm: React.FC<BaseContentFormProps> = ({
  children,
  ...props
}) => <StyledContentForm {...props}>{children}</StyledContentForm>;
export type ContentFormProps = React.ComponentProps<typeof ContentForm>;

type BaseContentFormItemProps = Pick<
  React.ComponentProps<'div'>,
  'className' | 'children'
> & {
  // NOTE: 必要に応じて追加
};

/**
 * 入力フォーム内の1要素のレイアウトを提供するコンポーネントです
 */
const StyledContentFormItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacings.sm,
}));

export const ContentFormItem: React.FC<BaseContentFormItemProps> = ({
  children,
  ...props
}) => <StyledContentFormItem {...props}>{children}</StyledContentFormItem>;
