import styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

/** コンテンツを定義する */
type Contents = {
  refs?: UseFormRegisterReturn;
  children?: React.ReactNode;
};

/**
 * インプットファイルプロパティを定義する
 */
type InputFileProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'className' | 'accept'
> &
  Contents;

/** インプットファイルスタイル設定 */
const Wrapper = styled.div({
  width: '100%',
});

/** インプットファイル スタイル */
const InputFileStyled = styled.input({
  width: '100%',
  ':focus': {
    outline: ['thin dotted', '5px auto -webkit-focus-ring-color'],
    outlineOffset: '-2px',
  },
});

/**
 * インプットファイルコンポーネントを定義する
 * @param InputFileProps プロパティ
 * @returns インプットファイルコンポーネント
 */
const InputFile: React.FC<InputFileProps> = ({
  className,
  accept,
  refs,
  children,
}) => (
  <Wrapper>
    <InputFileStyled
      type="file"
      className={className}
      accept={accept}
      ref={refs?.ref}
      onChange={refs?.onChange}
      onBlur={refs?.onBlur}
      name={refs?.name}
    />
    {children}
  </Wrapper>
);

// 初期値を設定する
InputFile.defaultProps = {
  refs: undefined,
};

// コンポーネントをエクスポートする
export default InputFile;
