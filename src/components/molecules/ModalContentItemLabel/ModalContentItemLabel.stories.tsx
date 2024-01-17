import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import ModalContentItemLabel from './ModalContentItemLabel';

type ModalContentItemLabelProps = PropsOf<typeof ModalContentItemLabel>;

export default ({
  title: 'Molecules/ModalContentItemLabel',
  component: ModalContentItemLabel,
} as Meta);

const Template: Story<ModalContentItemLabelProps> = ({
  label,
  required,
  className,
  children,
}) => (
  <div>
    <ModalContentItemLabel
      label={label}
      required={required}
      className={className}
    >
      {children}
    </ModalContentItemLabel>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  label: 'ラベル',
  children: 'コンテンツ',
};
