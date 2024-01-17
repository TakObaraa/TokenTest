import { Meta, StoryObj } from '@storybook/react';
import InputNumber from './InputNumber';

const title = 'Atoms/Input/InputNumber';
const meta: Meta<typeof InputNumber> = {
  title,
  component: InputNumber,
  parameters: { controls: { hideNoControlsWarning: true } },
  args: {},
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  render: () => (
    <div>
      <InputNumber placeholder="1234" />
    </div>
  ),
};

export const StyleType: Story = {
  render: () => (
    <div className="storybook-items">
      <div className="storybook-item">
        <InputNumber placeholder="1234" styleType="default" />
        <p className="storybook-component-name">default</p>
      </div>
      <div className="storybook-item">
        <InputNumber placeholder="1234" styleType="middle" />
        <p className="storybook-component-name">middle</p>
      </div>
      <div className="storybook-item">
        <InputNumber placeholder="1234" styleType="number" />
        <p className="storybook-component-name">number</p>
      </div>
      <div className="storybook-item">
        <InputNumber placeholder="1234" styleType="large" />
        <p className="storybook-component-name">large</p>
      </div>
    </div>
  ),
};
