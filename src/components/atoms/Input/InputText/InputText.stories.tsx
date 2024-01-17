import { Meta, StoryObj } from '@storybook/react';
import InputText, { InputTextProps } from './InputText';

const title = 'atoms/Input/InputText';
const meta: Meta<InputTextProps> = {
  title,
  component: InputText,
  parameters: { controls: { hideNoControlsWarning: true } },
  args: {},
};

export default meta;
type Story = StoryObj<InputTextProps>;

export const Default: Story = {
  render: () => (
    <div>
      <InputText placeholder="タイトル" />
    </div>
  ),
};

export const StyleType: Story = {
  render: () => (
    <div className="storybook-items">
      <div className="storybook-item">
        <InputText placeholder="default" styleType="default" />
        <p className="storybook-component-name">default</p>
      </div>
      <div className="storybook-item">
        <InputText placeholder="middle" styleType="middle" />
        <p className="storybook-component-name">middle</p>
      </div>
      <div className="storybook-item">
        <InputText placeholder="number" styleType="number" />
        <p className="storybook-component-name">number</p>
      </div>
      <div className="storybook-item">
        <InputText placeholder="large" styleType="large" />
        <p className="storybook-component-name">large</p>
      </div>
    </div>
  ),
};
