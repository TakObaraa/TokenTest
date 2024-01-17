import Radio from '@atoms/Radio/Radio';
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

// Memo: なんかいいやり方ないものか
type AttributesType = InputHTMLAttributes<HTMLInputElement>;
type Contents = {
  radios: {
    label: string;
    value?: AttributesType['value'];
    defaultChecked?: AttributesType['defaultChecked'];
    checked?: AttributesType['checked'];
    disabled?: AttributesType['disabled'];
  }[];
  refs?: UseFormRegisterReturn;
};

type Props = Contents & InputHTMLAttributes<HTMLInputElement>;

const Wrapper = Styled.div({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: `${SIZE.GAP._8} ${SIZE.GAP._16}`,
});

const Radios: React.FC<Props> = ({ radios, refs, disabled }) => (
  <Wrapper>
    {radios.map((radio, index) => (
      <Radio
        key={`key-${index.toString()}`}
        label={radio.label}
        value={radio.value}
        defaultChecked={radio.defaultChecked}
        refs={refs}
        checked={radio.checked}
        disabled={disabled || radio.disabled}
      />
    ))}
  </Wrapper>
);

export default Radios;

Radios.defaultProps = {
  refs: undefined,
};
