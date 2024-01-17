import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
// Todo create Test
import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Contents = {
  refs?: UseFormRegisterReturn;
  label: string;
};
type Style = {
  resetLineHeight?: boolean;
};
type Props = Contents &
  Style &
  HTMLAttributes<HTMLLabelElement> &
  InputHTMLAttributes<HTMLInputElement>;

/** StyleComponent */
const Wrapper = Styled('label')<Style>(({ resetLineHeight }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
  lineHeight: !resetLineHeight
    ? SIZE.LINEHEIGHT.DEFAULT
    : SIZE.LINEHEIGHT.RESET,
}));
const InputRadio = Styled('input')({
  margin: SIZE.MARGIN._0,
});

/** ReactComponent */
const Radio: React.FC<Props> = ({
  className,
  label,
  value,
  defaultChecked,
  disabled,
  refs,
  resetLineHeight,
}) => (
  <Wrapper className={className} resetLineHeight={resetLineHeight}>
    <InputRadio
      name={refs?.name}
      ref={refs?.ref}
      onBlur={refs?.onBlur}
      onChange={refs?.onChange}
      value={value}
      defaultChecked={defaultChecked}
      disabled={disabled}
      type="radio"
    />
    {label}
  </Wrapper>
);

export default Radio;

Radio.defaultProps = {
  refs: undefined,
  resetLineHeight: true,
};
