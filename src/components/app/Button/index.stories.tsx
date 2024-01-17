import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

type ComponentType = typeof Button;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;

export const Default: Story = {};

export const Type: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Button setType="primary">primary</Button>
      <Button setType="secondary">secondary</Button>
      <Button setType="light">light</Button>
      <Button setType="dark">dark</Button>
      <Button setType="warning">warning</Button>
      <Button setType="danger">danger</Button>
      <Button setType="other">other</Button>
      <Button setType="info">info</Button>
      <Button setType="success">success</Button>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Button setSize="default">default</Button>
      <Button setSize="small">small</Button>
      <Button setSize="middle">middle</Button>
      <Button setSize="large">large</Button>
      <Button setSize="wide">wide</Button>
    </div>
  ),
};
