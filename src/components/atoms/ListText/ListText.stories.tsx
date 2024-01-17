import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import ListText from './ListText';

type ListTextProps = PropsOf<typeof ListText>;

export default ({
  title: 'Atoms/ListText',
  component: ListText,
} as Meta);

const Template: Story<ListTextProps> = ({ className, setColor, setBold }) => (
  <div>
    <ListText className={className} setColor={setColor} setBold={setBold}>
      Normal ListText
    </ListText>
  </div>
);

export const Default = Template.bind({});

Default.args = {};

export const Color: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <ListText setColor="default">リスト</ListText>
      <p className="storybook-component-name">default</p>
    </div>
  </div>
);
