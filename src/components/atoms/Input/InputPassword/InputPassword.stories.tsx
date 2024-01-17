import { Meta, Story } from '@storybook/react';
import InputPassword from './InputPassword';

export default ({
  title: 'Atoms/Input/InputPassword',
  component: InputPassword,
} as Meta);

const Template: Story = () => (
  <div>
    <InputPassword placeholder="タイトル" />
  </div>
);

const props = {
  disabled: false,
  placeholder: 'カスタマイズ',
};

export const Default = Template.bind({});
Default.args = props;

export const StyleType: Story = () => (
  <div className="storybook-items">
    <div className="storybook-item">
      <InputPassword placeholder="default" styleType="default" />
      <p className="storybook-component-name">default</p>
    </div>
    <div className="storybook-item">
      <InputPassword placeholder="middle" styleType="middle" />
      <p className="storybook-component-name">middle</p>
    </div>
    <div className="storybook-item">
      <InputPassword placeholder="number" styleType="number" />
      <p className="storybook-component-name">number</p>
    </div>
    <div className="storybook-item">
      <InputPassword placeholder="large" styleType="large" />
      <p className="storybook-component-name">large</p>
    </div>
  </div>
);
