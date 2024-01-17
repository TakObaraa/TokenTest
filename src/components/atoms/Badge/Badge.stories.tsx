import { Meta, Story } from '@storybook/react';
import Badge from './Badge';

export default ({
  title: 'Atoms/Badge',
  component: Badge,
} as Meta);

const Template: Story = ({ className, count }) => (
  <div className="story-item">
    <p className="component-name">バッジ</p>
    <Badge className={className} count={count} />
  </div>
);

export const BadgeNumber = Template.bind({});

BadgeNumber.args = { count: 4 };
