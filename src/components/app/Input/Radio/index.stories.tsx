import { Meta, StoryObj } from '@storybook/react';
import { IconAlert } from 'src/components/app/icons/normal';
import Radio from '.';

type InputRadioProps = typeof Radio;
const meta: Meta<InputRadioProps> = {
  component: Radio,
  parameters: { controls: { hideNoControlsWarning: true } },
  args: {
    children: 'ラジオボタン',
  },
};

export default meta;
type Story = StoryObj<InputRadioProps>;

export const Default: Story = {};

/**
 * テキスト付きのラジオボタンを配置する場合は下記の方針に従ってスタイルを適用すること
 * - ラジオボタンの右側にmarginを設定する
 */
export const InputRadioText: Story = {
  render: () => <Radio style={{ marginRight: '4px' }}>ラジオボタン</Radio>,
};

/**
 * アイコンとテキスト付きのラジオボタンを配置する場合は下記の方針に従ってスタイルを適用すること
 * - ラジオボタンの右側にmarginを設定する
 * - アイコンの右側にmarginを設定する
 */
export const InputRadioIconText: Story = {
  render: () => (
    <Radio style={{ marginRight: '4px' }}>
      <IconAlert fontSize="12px" style={{ marginRight: '2px' }} />
      アイコン付ラジオボタン
    </Radio>
  ),
};
