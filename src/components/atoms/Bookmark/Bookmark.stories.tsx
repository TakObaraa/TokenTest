import { Meta, Story } from '@storybook/react';
import Bookmark from './Bookmark';

export default ({
  title: 'Atoms/Bookmark',
  component: Bookmark,
  argTypes: {
    setSize: {
      control: {
        type: 'select',
        options: ['_12', '_16', '_24'],
      },
    },
  },
} as Meta);

const Template: Story = ({ className, setSize, isActive, onClick }) => (
  <div>
    <Bookmark
      className={className}
      setSize={setSize}
      isActive={isActive}
      onClick={onClick}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  setSize: '_12',
  isActive: false,
};

export const Size: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Bookmark setSize="_12" onClick={() => console.log('')} />
      <p className="storybook-component-name">_12</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Bookmark setSize="_16" onClick={() => console.log('')} />
      <p className="storybook-component-name">_16</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Bookmark setSize="_24" onClick={() => console.log('')} />
      <p className="storybook-component-name">_24</p>
    </div>
  </div>
);
