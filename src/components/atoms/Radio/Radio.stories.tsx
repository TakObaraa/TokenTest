import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import Radio from './Radio';

type RadioPropsType = PropsOf<typeof Radio>;

export default ({
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    setSize: {
      control: {
        type: 'select',
        options: ['_12', '_24', '_32'],
      },
    },
  },
} as Meta);

const Template: Story<RadioPropsType> = ({
  className,
  label,
  value,
  defaultChecked,
  disabled,
  refs,
  resetLineHeight,
}) => (
  <div>
    <Radio
      className={className}
      label={label}
      value={value}
      defaultChecked={defaultChecked}
      disabled={disabled}
      refs={refs}
      resetLineHeight={resetLineHeight}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'ラジオ',
  defaultChecked: false,
  disabled: false,
  resetLineHeight: false,
};
