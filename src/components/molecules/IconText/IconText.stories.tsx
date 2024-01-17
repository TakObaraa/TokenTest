import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import IconText from './IconText';

type IconTextType = PropsOf<typeof IconText>;

export default ({
  title: 'Molecules/IconText',
  component: IconText,
} as Meta);

const Template: Story<IconTextType> = ({
  setFontSize,
  setFontColor,
  setBold,
  setIconColor,
  iconName,
  className,
  children,
}) => (
  <div className="story-item">
    <IconText
      setFontSize={setFontSize}
      setFontColor={setFontColor}
      setBold={setBold}
      setIconColor={setIconColor}
      iconName={iconName}
      className={className}
    >
      {children}
    </IconText>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  iconName: 'alert',
  children: 'IconText',
};
