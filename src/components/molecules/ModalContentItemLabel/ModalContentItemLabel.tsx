import LabelBox from '@atoms/LabelBox/LabelBox';
import Paragraph from '@atoms/Paragraph/Paragraph';
// Todo Storybook
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type ModalContentItemLabelProps = {
  label: string;
  required?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Wrapper = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
  alignItems: 'center',
});

const ModalContentItemLabel: React.FC<ModalContentItemLabelProps> = ({
  label,
  required,
  className,
  children,
}) => (
  <Wrapper className={className}>
    <Paragraph setBold>{label}</Paragraph>
    {required && (
      <LabelBox setLabelColor="warning" setSize="small">
        必須
      </LabelBox>
    )}
    {children}
  </Wrapper>
);

export default ModalContentItemLabel;

ModalContentItemLabel.defaultProps = {
  required: false,
};
