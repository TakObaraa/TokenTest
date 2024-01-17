import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React from 'react';

const Wrapper = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._16,
});

/**
 * AppModalFormの子要素のみで使用可能なコンポーネント
 * １項目単位でラップするためのコンポーネント
 */
export const AppModalFormItem = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._8,
});

/**
 * AppModalFormの子要素のみで使用可能なコンポーネント
 * AppModalFormItemの子要素として使用する
 * 1つの項目に対してインプットが複数ある場合に使用
 */
export const AppModalFormInputItems = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: SIZE.GAP._8,
});

/**
 * AppModalFormの子要素のみで使用可能なコンポーネント
 * AppModalFormItemの子要素として使用する
 * 1つの項目に対してインプットが複数横並びである場合に使用
 */
export const AppModalFormInputRowItems = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._8,
  alignItems: 'center',
});

export type AppModalFormProps = {
  // NOTE: 必要であれば拡張
  children: React.ReactNode;
};

const AppModalForm: React.FC<AppModalFormProps> = ({ children }) => {
  console.log('render AppModalForm');
  return <Wrapper>{children}</Wrapper>;
};
export default AppModalForm;

// Todo コンパウンドパターンに変更
// export const AppModalForm = ({ children }: AppModalFormProps) => {
//   console.log('render AppModalForm');
//   return <Wrapper>{children}</Wrapper>;
// };

// const Item = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => <AppModalFormItem className={className}>{children}</AppModalFormItem>;
// AppModalForm.Item = Item;
