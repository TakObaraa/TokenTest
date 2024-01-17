import { Meta, Story } from '@storybook/react';
import React from 'react';
import Icon, { ColorType, IconNameType, SizeType } from './Icon';

export default ({
  title: 'Atoms/Icon',
  component: Icon,
} as Meta);

const iconNames: IconNameType[] = [
  'alert',
  'alignJustify',
  'arrowUp',
  'ban',
  'bbs',
  'board',
  'bookmark',
  'calendar',
  'cameraSwitch',
  'camera',
  'cancel',
  'category',
  'chat',
  'check',
  'checkup',
  'chevronDown',
  'chevronUp',
  'chevronPrev',
  'chevronNext',
  'chevronUpDown',
  'circular',
  'clip',
  'clock',
  'comment',
  'connection',
  'datepicker',
  'delete',
  'divert',
  'document',
  'documentAdd',
  'download',
  'edit',
  'entry',
  'exclamationSign',
  'eyeOpen',
  'facility',
  'family',
  'flag',
  'forum',
  'home',
  'image',
  'imageAdd',
  'infoSign',
  'ledger',
  'listAlt',
  'list',
  'lock',
  'mapMarker',
  'meeting',
  'memo',
  'messageRead',
  'messageUnread',
  'message',
  'microphoneOff',
  'microphone',
  'pencil',
  'pluralReply',
  'print',
  'receiver',
  'record',
  'repeat',
  'reply',
  'screenshare',
  'search',
  'setting',
  'sort',
  'staffMale',
  'stats',
  'statsOff',
  'stop',
  'summary',
  'thList',
  'triangleUpDown',
  'userMale',
  'videomeetingOff',
  'videomeeting',
  'vote',
  'voteOff',
  'whoami',
];

const Template: Story<{
  name: IconNameType;
  setColor: ColorType;
  setSize: SizeType;
}> = ({ name, setColor, setSize }) => (
  <Icon name={name} setColor={setColor} setSize={setSize} />
);

export const Default = Template.bind({});

Default.args = {
  name: 'alert',
  setSize: '_16',
  setColor: 'default',
};

export const Names: React.FC = () => (
  <div className="storybook-items">
    {iconNames.map((iconName) => (
      <div
        className="storybook-item"
        style={{
          width: '120px',
        }}
        key={iconName}
      >
        <Icon name={iconName} />
        <p className="storybook-component-name">{iconName}</p>
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
      <Icon name="alert" setSize="_10" />
      <p className="storybook-component-name">_10</p>
      <p className="storybook-component-name">10px</p>
    </div>
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setSize="_12" />
      <p className="storybook-component-name">_12</p>
      <p className="storybook-component-name">12px</p>
    </div>
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setSize="_14" />
      <p className="storybook-component-name">_14</p>
      <p className="storybook-component-name">14px</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setSize="_16" />
      <p className="storybook-component-name">_16</p>
      <p className="storybook-component-name">16px</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setSize="_18" />
      <p className="storybook-component-name">_18</p>
      <p className="storybook-component-name">18px</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setSize="_24" />
      <p className="storybook-component-name">_24</p>
      <p className="storybook-component-name">24px</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setSize="_32" />
      <p className="storybook-component-name">_32</p>
      <p className="storybook-component-name">32px</p>
    </div>
  </div>
);

export const Color: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setColor="default" />
      <p className="storybook-component-name">default</p>
      <p className="storybook-component-name">Gray_900</p>
      <p className="storybook-component-name">#333333</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setColor="lightGray" />
      <p className="storybook-component-name">lightGray</p>
      <p className="storybook-component-name">Gray_400</p>
      <p className="storybook-component-name">#b3b3b3</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setColor="red" />
      <p className="storybook-component-name">red</p>
      <p className="storybook-component-name">RED_700</p>
      <p className="storybook-component-name">#d43e3a</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setColor="darkRed" />
      <p className="storybook-component-name">darkRed</p>
      <p className="storybook-component-name">RED_900</p>
      <p className="storybook-component-name">#8b211e</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setColor="blue" />
      <p className="storybook-component-name">blue</p>
      <p className="storybook-component-name">BLUE_600</p>
      <p className="storybook-component-name">#337ab7</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setColor="sky" />
      <p className="storybook-component-name">sky</p>
      <p className="storybook-component-name">SKY_600</p>
      <p className="storybook-component-name">#46b8da</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setColor="green" />
      <p className="storybook-component-name">green</p>
      <p className="storybook-component-name">GREEN_800</p>
      <p className="storybook-component-name">#3d8b3d</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
      }}
    >
      <Icon name="alert" setColor="orange" />
      <p className="storybook-component-name">oragen</p>
      <p className="storybook-component-name">ORANGE_500</p>
      <p className="storybook-component-name">#f0ad4e</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: '120px',
        backgroundColor: '#333',
      }}
    >
      <Icon name="alert" setColor="white" />
      <p className="storybook-component-name" style={{ color: '#fff' }}>
        white
      </p>
      <p className="storybook-component-name" style={{ color: '#fff' }}>
        GRAY_0
      </p>
      <p className="storybook-component-name" style={{ color: '#fff' }}>
        #FFFFFF
      </p>
    </div>
  </div>
);
