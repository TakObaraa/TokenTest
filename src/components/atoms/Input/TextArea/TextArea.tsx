import Styled from '@emotion/styled';
import { BOXSHADOW, COLOR, SIZE } from '@styles/constant';
import React, { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FontSizeOption = keyof typeof SIZE.FONT;
type Contents = {
  refs?: UseFormRegisterReturn;
};
type Style = {
  setFontSize?: Extract<FontSizeOption, '_12' | '_14' | '_16'>;
  isAlert?: boolean;
};

type TextAreaProps = Contents &
  Style &
  Pick<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'className' | 'disabled' | 'placeholder' | 'rows' | 'defaultValue'
  >;

/** StyledComponent */
const Wrapper = Styled('textarea')<TextAreaProps>(
  {
    overflow: 'auto',
    resize: 'none',
    font: 'inherit',
    margin: SIZE.MARGIN._0,
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    display: 'block',
    width: '100%',
    height: 'auto',
    padding: `${SIZE.PADDING._8} ${SIZE.PADDING._12}`,
    color: COLOR.FONT.INPUT,
    backgroundColor: COLOR.BACKGROUND.GRAY_0,
    border: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
    backgroundImage: 'none',
    borderRadius: SIZE.RADIUS.DEFAULT,
    boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
    ':focus': {
      borderColor: COLOR.BORDER.INPUT_FOCUS,
      outline: 0,
      boxShadow: BOXSHADOW.FOCUS,
    },
    ':disabled': {
      backgroundColor: COLOR.BACKGROUND.DISABLED,
      opacity: 1,
      cursor: 'not-allowed',
    },
    '::placeholder': {
      color: COLOR.FONT.PLACEHOLDER,
    },
    ':hover': {
      border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.INPUT_HOVER}`,
    },
  },
  ({ setFontSize }) =>
    setFontSize === undefined
      ? { fontSize: SIZE.FONT._14 }
      : {
          fontSize: SIZE.FONT[setFontSize],
        },
  ({ isAlert }) =>
    isAlert === true && {
      backgroundColor: COLOR.BACKGROUND.RED_200,
    },
);

/** StyledComponent */
const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  setFontSize,
  isAlert,
  disabled,
  className,
  rows,
  defaultValue,
  refs,
}) => (
  <Wrapper
    placeholder={placeholder}
    setFontSize={setFontSize}
    isAlert={isAlert}
    rows={rows}
    disabled={disabled}
    className={className}
    ref={refs?.ref}
    name={refs?.name}
    onChange={refs?.onChange}
    onBlur={refs?.onBlur}
    defaultValue={defaultValue}
  />
);

// 初期値を設定する
TextArea.defaultProps = {
  setFontSize: undefined,
  isAlert: false,
  refs: undefined,
};

// コンポーネントをエクスポートする
export default TextArea;
