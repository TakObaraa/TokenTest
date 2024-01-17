import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonType } from './Button';

type ButtonPropsType = PropsOf<typeof Button>;

export default ({
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    setSize: {
      options: ['small', 'middle', 'large', 'wide', 'default'],
      control: { type: 'select' },
    },
  },
} as Meta);

// Meme: パターンが多いやつは配列にしといてmapで回す
const buttonTypes: ButtonType[] = [
  'primary',
  'secondary',
  'light',
  'dark',
  'warning',
  'danger',
  'other',
  'info',
  'receiver',
  'success',
  'succeed',
];

const Template: Story<ButtonPropsType> = ({
  className,
  setType,
  setSize,
  isDisable,
  iconName,
  setIconPosition,
  onClick,
  children,
}) => (
  <div>
    <Button
      className={className}
      isDisable={isDisable}
      setType={setType}
      setSize={setSize}
      setIconPosition={setIconPosition}
      iconName={iconName}
      onClick={onClick}
    >
      {children}
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'button test',
};

export const Type: Story = () => (
  <div className="storybook-items">
    {buttonTypes.map((buttonType, index) => (
      <div
        key={`key-${index.toString()}`}
        className="storybook-item"
        style={{
          width: '120px',
        }}
      >
        <Button setType={buttonType}>{buttonType}</Button>
        <p className="storybook-component-name">{buttonType}</p>
      </div>
    ))}
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
      <Button setSize="default">default</Button>
      <p className="storybook-component-name">default</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Button setSize="small">small</Button>
      <p className="storybook-component-name">small</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Button setSize="middle">middle</Button>
      <p className="storybook-component-name">middle</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Button setSize="large">large</Button>
      <p className="storybook-component-name">large</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Button setSize="wide">wide</Button>
      <p className="storybook-component-name">wide</p>
    </div>
  </div>
);
