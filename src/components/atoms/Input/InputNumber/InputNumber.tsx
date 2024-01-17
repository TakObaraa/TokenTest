import Styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type StyleTypeOption = 'default' | 'middle' | 'number' | 'large';
type Contents = {
  refs?: UseFormRegisterReturn;
};
type Style = {
  styleType?: StyleTypeOption;
  isAlert?: boolean;
};

type InputNumberProps = Contents &
  Style &
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'disabled' | 'placeholder' | 'defaultValue'
  >;

/** StyledComponent */
const Wrapper = Styled.input<Pick<InputNumberProps, 'styleType' | 'isAlert'>>(
  {
    display: 'block',
    width: '100%',
    color: COLOR.FONT.INPUT,
    backgroundColor: COLOR.FONT.GRAY_0,
    border: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    borderRadius: SIZE.RADIUS.DEFAULT,
    '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
      display: 'none',
    },
    ':focus': {
      borderColor: COLOR.BORDER.INPUT_FOCUS,
      outline: 0,
      boxShadow:
        'inset 0 1px 1px rgb(0 0 0 / 7.5%), 0 0 8px rgb(102 175 233 / 60%)',
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

/** ReactComponent */
const InputNumber: React.FC<InputNumberProps> = ({
  className,
  disabled,
  placeholder,
  styleType,
  isAlert,
  defaultValue,
  refs,
}) => (
  <Wrapper
    className={className}
    defaultValue={defaultValue}
    disabled={disabled}
    placeholder={placeholder}
    styleType={styleType}
    isAlert={isAlert}
    ref={refs?.ref}
    name={refs?.name}
    onChange={refs?.onChange}
    onBlur={refs?.onBlur}
    type="number"
  />
);

InputNumber.defaultProps = {
  refs: undefined,
  styleType: 'default',
  isAlert: false,
};

export default InputNumber;
