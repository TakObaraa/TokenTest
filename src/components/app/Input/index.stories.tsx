import InputDate from '@app/Input/InputDate';
import LabelBox from '@app/LabelBox';
import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

type ComponentType = typeof Input;

const meta: Meta<ComponentType> = {
  component: Input,
};

type Story = StoryObj<ComponentType>;

export const Default: Story = {
  render: () => {
    return (
      <Input>
        <Input.Label>
          期間
          <LabelBox setLabelColor="warning" setSize="small">
            必須
          </LabelBox>
        </Input.Label>

        <Input.Description>期間を選択してください</Input.Description>

        <InputDate type="range" />

        <Input.ErrorMessage>エラーメッセージ</Input.ErrorMessage>
      </Input>
    );
  },
};

export const InputLabel: Story = {
  render: () => {
    return <Input.Label>期間</Input.Label>;
  },
};

export const InputDescription: Story = {
  render: () => {
    return <Input.Description>期間を選択してください</Input.Description>;
  },
};

export const InputErrorMessage: Story = {
  render: () => {
    return <Input.ErrorMessage>エラーメッセージ</Input.ErrorMessage>;
  },
};

export default meta;
