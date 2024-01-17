import styled from '@emotion/styled';
import { BOXSHADOW, COLOR, SIZE } from '@styles/constant';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

// TODO: フォントサイズの指定とフォントの位置指定が混在する指定なので個別に設定できるよう改修する
type Props = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'children' | 'type'
> & {
  styleType?: 'default' | 'middle' | 'number' | 'large';
  isAlert?: boolean;
  refs?: UseFormRegisterReturn;
};

const Wrapper = styled('input')<Props>(
  {
    display: 'block',
    width: '100%',
    color: COLOR.FONT.INPUT,
    backgroundColor: COLOR.FONT.GRAY_0,
    border: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    borderRadius: SIZE.RADIUS.DEFAULT,
    ':focus': {
      borderColor: COLOR.BORDER.INPUT_FOCUS,
      outline: 0,
      boxShadow: BOXSHADOW.FOCUS,
    },
    '::placeholder': {
      color: COLOR.FONT.PLACEHOLDER,
    },
    ':hover': {
      border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.INPUT_HOVER}`,
    },
    ':disabled': {
      boxShadow: 'none',
      border: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
      backgroundColor: COLOR.BACKGROUND.DISABLED,
      opacity: 1,
      cursor: 'not-allowed',
      color: COLOR.FONT.DISABLED,
    },
  },
  ({ styleType }) =>
    (styleType === 'default' || styleType === undefined) && {
      padding: `${SIZE.PADDING._0} ${SIZE.PADDING._0} ${SIZE.PADDING._0} ${SIZE.PADDING._8}`,
      fontSize: SIZE.FONT._12,
      height: '28px',
      textAlign: 'left',
    },
  ({ styleType }) =>
    styleType === 'middle' && {
      padding: `${SIZE.PADDING._0} ${SIZE.PADDING._4} ${SIZE.PADDING._0} ${SIZE.PADDING._12}`,
      fontSize: SIZE.FONT._14,
      height: '30px',
      textAlign: 'left',
    },
  ({ styleType }) =>
    styleType === 'number' && {
      padding: `${SIZE.PADDING._0}  ${SIZE.PADDING._4} ${SIZE.PADDING._0}  ${SIZE.PADDING._4}`,
      fontSize: SIZE.FONT._12,
      height: '28px',
      textAlign: 'center',
    },
  ({ styleType }) =>
    styleType === 'large' && {
      padding: `${SIZE.PADDING._8} ${SIZE.PADDING._12}`,
      fontSize: SIZE.FONT._20,
      '::placeholder': {
        fontSize: SIZE.FONT._14,
      },
    },
  ({ isAlert }) =>
    isAlert === true && {
      backgroundColor: COLOR.BACKGROUND.RED_200,
    },
);

const InputText = React.forwardRef<HTMLInputElement, Props>(
  ({ refs, ...props }, _ref) => {
    // NOTE: react.forwardRefを使用するように直す（i/fが変わるため一時的に既存のi/fで実装できるように対応）
    return <Wrapper type="text" {...refs} {...props} />;
  },
);

export default InputText;
export type InputTextProps = React.ComponentProps<typeof InputText>;
