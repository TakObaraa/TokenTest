import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import IconActionAnchor from './IconActionAnchor';

type IconActionAnchorType = PropsOf<typeof IconActionAnchor>;

export default ({
  title: 'Molecules/IconActionAnchor',
  component: IconActionAnchor,
} as Meta);

const Template: Story<IconActionAnchorType> = ({
  className,
  iconName,
  children,
  onClick,
  setFontSize,
  setTabletFontSize,
  setMobileFontSize,
  setColor,
  setIconSize,
  setGap,
  isEllipsis,
}) => (
  <div className="story-item">
    <IconActionAnchor
      iconName={iconName}
      onClick={onClick}
      className={className}
      setFontSize={setFontSize}
      setTabletFontSize={setTabletFontSize}
      setMobileFontSize={setMobileFontSize}
      setColor={setColor}
      setIconSize={setIconSize}
      setGap={setGap}
      isEllipsis={isEllipsis}
    >
      {children}
    </IconActionAnchor>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  iconName: 'search',
  children: 'IconActionAnchor',
};
