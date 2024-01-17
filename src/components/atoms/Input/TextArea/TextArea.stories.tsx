import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import TextArea from './TextArea';

type TextAreaPropsType = PropsOf<typeof TextArea>;

export default ({
  title: 'Atoms/Input/TextArea',
  component: TextArea,
} as Meta);

const Template: Story<TextAreaPropsType> = ({
  disabled,
  placeholder,
  setFontSize,
}) => (
  <div className="story-item">
    <p className="component-name">テキストエリア</p>
    <TextArea
      placeholder={placeholder}
      disabled={disabled}
      setFontSize={setFontSize}
    />
  </div>
);

const props: TextAreaPropsType = {
  disabled: false,
  placeholder: '内容を入力',
  setFontSize: '_16',
};

export const Default = Template.bind({});
Default.args = props;

export const FontSize: Story = () => (
  <div className="storybook-items">
    <div className="storybook-item">
      <TextArea
        placeholder={props.placeholder}
        disabled={props.disabled}
        setFontSize="_12"
      />
      <p className="storybook-component-name">_12</p>
    </div>
    <div className="storybook-item">
      <TextArea
        placeholder={props.placeholder}
        disabled={props.disabled}
        setFontSize="_14"
      />
      <p className="storybook-component-name">_14</p>
    </div>
    <div className="storybook-item">
      <TextArea
        placeholder={props.placeholder}
        disabled={props.disabled}
        setFontSize="_16"
      />
      <p className="storybook-component-name">_16</p>
    </div>
  </div>
);
