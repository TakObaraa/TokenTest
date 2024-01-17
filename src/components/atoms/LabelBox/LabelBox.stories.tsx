import { Meta, Story } from '@storybook/react';
import LabelBox from './LabelBox';

export default ({
  title: 'Atoms/LabelBox',
  component: LabelBox,
  argTypes: {
    setLabelColor: {
      options: ['primary', 'warning', 'finish', 'success', 'info', 'danger'],
      control: { type: 'select' },
    },
    setSize: {
      options: ['small', 'default'],
      control: { type: 'select' },
    },
  },
} as Meta);

const Template: Story = ({ className, text, setLabelColor, setSize }) => (
  <LabelBox
    className={className}
    setLabelColor={setLabelColor}
    setSize={setSize}
  >
    {text}
  </LabelBox>
);

export const labelBox = Template.bind({});
labelBox.args = {
  text: '未読',
  setLabelColor: 'primary',
  setSize: 'default',
};

export const LabelColor: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <LabelBox setLabelColor="primary">未読</LabelBox>
      <p className="storybook-component-name">primary</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <LabelBox setLabelColor="warning">未読</LabelBox>
      <p className="storybook-component-name">warning</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <LabelBox setLabelColor="finish">未読</LabelBox>
      <p className="storybook-component-name">finish</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <LabelBox setLabelColor="success">未読</LabelBox>
      <p className="storybook-component-name">success</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <LabelBox setLabelColor="info">未読</LabelBox>
      <p className="storybook-component-name">info</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <LabelBox setLabelColor="danger">削除</LabelBox>
      <p className="storybook-component-name">danger</p>
    </div>
  </div>
);

export const Size: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <LabelBox setSize="default">未読</LabelBox>
      <p className="storybook-component-name">default</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <LabelBox setSize="small">未読</LabelBox>
      <p className="storybook-component-name">warning</p>
    </div>
  </div>
);
