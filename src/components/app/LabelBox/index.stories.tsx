import { Meta, StoryObj } from '@storybook/react';
import LabelBox from '.';

export default ({
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
  args: {
    children: '未読',
  },
} as Meta);

export const Default: StoryObj<typeof LabelBox> = {};

export const LabelColor: StoryObj<typeof LabelBox> = {
  render: () => (
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
  ),
};

export const Size: StoryObj<typeof LabelBox> = {
  render: () => (
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
        <p className="storybook-component-name">small</p>
      </div>
    </div>
  ),
};
