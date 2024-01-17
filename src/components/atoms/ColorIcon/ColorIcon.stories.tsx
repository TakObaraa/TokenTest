import { Meta, Story } from '@storybook/react';
import React from 'react';
import ColorIcon, { ColorIconNameType, SizeType } from './ColorIcon';

export default ({
  title: 'Atoms/ColorIcon',
  component: ColorIcon,
} as Meta);

const colorIconNames: ColorIconNameType[] = [
  'bbs',
  'bookmark',
  'calendar',
  'cancel',
  'care-log',
  'category',
  'chat',
  'check',
  'checkup-tube',
  'checkup',
  'circular',
  'clip',
  'clock',
  'collection',
  'comment-darkgreen',
  'comment-green',
  'conference-bottom',
  'conference-top',
  'contribution',
  'delete',
  'divert',
  'doc-med',
  'doc-mell',
  'doc-wel',
  'document-doc',
  'document',
  'edit',
  'entry',
  'exclamation-sign',
  'facility',
  'family',
  'flag',
  'forum',
  'home',
  'hospital',
  'icons-books',
  'icons-breef',
  'icons-care',
  'icons-check',
  'icons-circle',
  'icons-comment',
  'icons-karte',
  'icons-mtg-time',
  'icons-mtg-txt',
  'icons-shop',
  'image',
  'info',
  'karte-int',
  'karte-sp',
  'karte',
  'ledger',
  'list',
  'mail',
  'meeting',
  'memo',
  'message',
  'minutes',
  'plural-reply',
  'record',
  'reply',
  'search',
  'setting',
  'sort',
  'staff-female',
  'staff-male',
  'stop',
  'summary',
  'tag',
  'update',
  'user-female',
  'user-male',
  'videomeeting',
  'whoami',
  'brand',
];

const Template: Story<{
  name: ColorIconNameType;
  setSize: SizeType;
}> = ({ name, setSize }) => <ColorIcon name={name} setSize={setSize} />;

export const Default = Template.bind({});

Default.args = {
  name: 'bbs',
  setSize: '_18',
};

export const Names: React.FC = () => (
  <div className="storybook-items">
    {colorIconNames.map((iconName) => (
      <div
        className="storybook-item"
        style={{
          width: '120px',
        }}
        key={iconName}
      >
        <ColorIcon name={iconName} />
        <p className="storybook-component-name">{iconName}</p>
      </div>
    ))}
  </div>
);

export const setSize: React.FC = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <ColorIcon name="bbs" setSize="_10" />
      <p className="storybook-component-name">_10</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <ColorIcon name="bbs" setSize="_12" />
      <p className="storybook-component-name">_12</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <ColorIcon name="bbs" setSize="_14" />
      <p className="storybook-component-name">_14</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <ColorIcon name="bbs" setSize="_16" />
      <p className="storybook-component-name">_16</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <ColorIcon name="bbs" setSize="_18" />
      <p className="storybook-component-name">_18</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <ColorIcon name="bbs" setSize="_24" />
      <p className="storybook-component-name">_24</p>
    </div>
  </div>
);
