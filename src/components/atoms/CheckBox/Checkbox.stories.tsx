import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import CheckBox from './Checkbox';

type CheckBoxPropsType = PropsOf<typeof CheckBox>;

export default ({
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as Meta);

const Template: Story<CheckBoxPropsType> = ({
  disabled,
  className,
  refs,
  label,
  tabletLabel,
  mobileLabel,
  icon,
}) => (
  <div className="story-item">
    <CheckBox
      disabled={disabled}
      className={className}
      refs={refs}
      label={label}
      tabletLabel={tabletLabel}
      mobileLabel={mobileLabel}
      icon={icon}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: '下書きとして保存する',
  disabled: false,
  icon: 'edit',
  tabletLabel: '下書き保存',
  mobileLabel: '下書き',
};
