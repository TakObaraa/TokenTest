import styled from '@emotion/styled';
import React from 'react';

type Props = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'children' | 'type' | 'multiple'
> & {
  // NOTE: 必要に応じて追加
};

const Wrapper = styled('input')(({ theme }) => ({
  width: theme.sizes.full,
  ':focus': {
    outline: ['thin dotted', '5px auto -webkit-focus-ring-color'],
    outlineOffset: '-2px',
  },
}));

/**
 * RLのファイル添付に関する制限事項
 * - inputタグとファイルの添付数は 1:1 となるように実装してください。
 * - inputタグのファイルの添付数が 1:n となる実装は禁止です。（将来的にもやらない）
 * - 複数ファイルの添付が必要な場合は必要な数だけinputタグを用意してください。
 *
 * 理由
 * - ファイル添付の導線が混在し、使い方に統一感がなくなるため。
 * - ファイルのバリデーションやエラー表示の実装が複雑なため
 */
const InputFile = React.forwardRef<HTMLInputElement, Props>(
  ({ ...props }, ref) => <Wrapper type="file" ref={ref} {...props} />,
);

export default InputFile;
