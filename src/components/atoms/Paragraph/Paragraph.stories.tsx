import { PropsOf } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import Paragraph from './Paragraph';

type ParagraphProps = PropsOf<typeof Paragraph>;
export default ({
  title: 'Atoms/Paragraph',
  component: Paragraph,
} as Meta);

const Template: Story<ParagraphProps> = ({
  className,
  setFontSize,
  setColor,
  setBold,
}) => (
  <div>
    <Paragraph
      className={className}
      setFontSize={setFontSize}
      setColor={setColor}
      setBold={setBold}
    >
      Normal Text
    </Paragraph>
  </div>
);

export const Default = Template.bind({});

Default.args = {};

export const Color: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Paragraph setColor="default">default</Paragraph>
      <p className="storybook-component-name">#333</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Paragraph setColor="gray">gray</Paragraph>
      <p className="storybook-component-name">#666</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Paragraph setColor="ash">ash</Paragraph>
      <p className="storybook-component-name">#999</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Paragraph setColor="lightGray">lightGray</Paragraph>
      <p className="storybook-component-name">#b3b3b3</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Paragraph setColor="blue">blue</Paragraph>
      <p className="storybook-component-name">#337ab7</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Paragraph setColor="success">success</Paragraph>
      <p className="storybook-component-name">#4cae4c</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Paragraph setColor="danger">danger</Paragraph>
      <p className="storybook-component-name">#d9534f</p>
    </div>
  </div>
);
