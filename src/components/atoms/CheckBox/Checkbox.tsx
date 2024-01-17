// Todo ReactHookForm対応
import Styled from '@emotion/styled';
import { BREAKPOINT, SIZE } from '@styles/constant';
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Icon, { IconNameType } from '../Icon/Icon';
import Paragraph, { TextColorType } from '../Paragraph/Paragraph';

export type Contents = {
  label?: string;
  tabletLabel?: string;
  mobileLabel?: string;
  icon?: IconNameType;
  refs?: UseFormRegisterReturn;
  setColor?: TextColorType;
};

export type Style = {
  setBold?: boolean;
  setLabelSize?: '_12' | '_14';
  resetLineHeight?: boolean;
  isWrap?: boolean;
  isEllipsis?: boolean;
};

type CheckBoxProps = Contents &
  Style &
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'disabled' | 'value' | 'defaultChecked' | 'checked'
  >;

/** StyledComponent */
const Wrapper = Styled('label')<Style>(
  ({ resetLineHeight, isWrap, isEllipsis }) => ({
    width: isEllipsis ? 'auto' : 'fit-content',
    cursor: 'pointer',
    display: 'inline',
    lineHeight: !resetLineHeight
      ? SIZE.LINEHEIGHT.DEFAULT
      : SIZE.LINEHEIGHT.ZERO,
    whiteSpace: isWrap ? 'inherit' : 'pre',
  }),
  ({ isEllipsis }) =>
    isEllipsis && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'pre',
    },
);
const InputCheck = Styled('input')<{ setLabel: boolean }>(({ setLabel }) => ({
  width: '12px',
  cursor: 'pointer',
  margin:
    setLabel === true
      ? `${SIZE.MARGIN._0} ${SIZE.MARGIN._4} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`
      : SIZE.MARGIN._0,
}));
const StyledIcon = Styled(Icon)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._2} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
});
const LabelText = Styled(Paragraph)<{
  setFontSize: Style['setLabelSize'];
}>(({ setFontSize }) => ({
  lineHeight: SIZE.LINEHEIGHT.RESET,
  verticalAlign: setFontSize === '_14' ? 'text-top' : 'bottom',
  display: 'inline',
  [BREAKPOINT.TABLET]: {
    display: 'none',
  },
}));
const LabelTabletText = Styled(Paragraph)<{
  setFontSize: Style['setLabelSize'];
}>(({ setFontSize }) => ({
  display: 'none',
  lineHeight: SIZE.LINEHEIGHT.RESET,
  verticalAlign: setFontSize === '_14' ? 'text-top' : 'bottom',
  [BREAKPOINT.TABLET]: {
    display: 'inline',
  },
  [BREAKPOINT.MOBILE]: {
    display: 'none',
  },
}));
const LabelMobileText = Styled(Paragraph)<{
  setFontSize: Style['setLabelSize'];
}>(({ setFontSize }) => ({
  display: 'none',
  lineHeight: SIZE.LINEHEIGHT.RESET,
  verticalAlign: setFontSize === '_14' ? 'text-top' : 'bottom',
  [BREAKPOINT.MOBILE]: {
    display: 'inline',
  },
}));

/** ReactComponent */
const CheckBox: React.FC<CheckBoxProps> = ({
  className,
  disabled,
  value,
  label,
  tabletLabel,
  mobileLabel,
  icon,
  resetLineHeight,
  setBold,
  setLabelSize,
  isWrap,
  isEllipsis,
  refs,
  defaultChecked,
  checked,
  setColor,
}: CheckBoxProps) => (
  <Wrapper
    className={className}
    resetLineHeight={resetLineHeight}
    isWrap={isWrap}
    isEllipsis={isEllipsis}
  >
    <InputCheck
      disabled={disabled}
      value={value}
      onChange={refs?.onChange}
      name={refs?.name}
      ref={refs?.ref}
      defaultChecked={defaultChecked}
      checked={checked}
      setLabel={label !== undefined}
      type="checkBox"
    />
    {icon && <StyledIcon name={icon} setSize="_12" />}
    <LabelText setFontSize={setLabelSize} setBold={setBold} setColor={setColor}>
      {label}
    </LabelText>
    <LabelTabletText
      setFontSize={setLabelSize}
      setBold={setBold}
      setColor={setColor}
    >
      {tabletLabel || label}
    </LabelTabletText>
    <LabelMobileText
      setFontSize={setLabelSize}
      setBold={setBold}
      setColor={setColor}
    >
      {mobileLabel || label}
    </LabelMobileText>
  </Wrapper>
);

CheckBox.defaultProps = {
  refs: undefined,
  label: undefined,
  tabletLabel: undefined,
  mobileLabel: undefined,
  icon: undefined,
  setBold: false,
  setLabelSize: '_14',
  resetLineHeight: true,
  isWrap: true,
  isEllipsis: false,
};

export default CheckBox;
