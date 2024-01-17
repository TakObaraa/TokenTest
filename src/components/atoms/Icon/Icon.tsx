import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { BREAKPOINT, COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';
import { ReactComponent as IconAlert } from '../../../assets/icon/icon-alert.svg';
import { ReactComponent as IconAlignJustify } from '../../../assets/icon/icon-align-justify.svg';
import { ReactComponent as IconArrowUp } from '../../../assets/icon/icon-arrow-up.svg';
import { ReactComponent as IconBan } from '../../../assets/icon/icon-ban.svg';
import { ReactComponent as IconBbs } from '../../../assets/icon/icon-bbs.svg';
import { ReactComponent as IconBoard } from '../../../assets/icon/icon-board.svg';
import { ReactComponent as IconBookMark } from '../../../assets/icon/icon-bookmark.svg';
import { ReactComponent as IconCalendar } from '../../../assets/icon/icon-calendar.svg';
import { ReactComponent as IconCameraSwitch } from '../../../assets/icon/icon-camera-switch.svg';
import { ReactComponent as IconCamera } from '../../../assets/icon/icon-camera.svg';
import { ReactComponent as IconCancel } from '../../../assets/icon/icon-cancel.svg';
import { ReactComponent as IconCategory } from '../../../assets/icon/icon-category.svg';
import { ReactComponent as IconCheck } from '../../../assets/icon/icon-check.svg';
import { ReactComponent as IconCheckup } from '../../../assets/icon/icon-checkup.svg';
import { ReactComponent as IconChevronDown } from '../../../assets/icon/icon-chevron-down.svg';
import { ReactComponent as IconChevronNext } from '../../../assets/icon/icon-chevron-next.svg';
import { ReactComponent as IconChevronPrev } from '../../../assets/icon/icon-chevron-prev.svg';
import { ReactComponent as IconChevronUpDown } from '../../../assets/icon/icon-chevron-up-down.svg';
import { ReactComponent as IconChevronUp } from '../../../assets/icon/icon-chevron-up.svg';
import { ReactComponent as IconCircular } from '../../../assets/icon/icon-circular.svg';
import { ReactComponent as IconClip } from '../../../assets/icon/icon-clip.svg';
import { ReactComponent as IconClock } from '../../../assets/icon/icon-clock.svg';
import { ReactComponent as IconComment } from '../../../assets/icon/icon-comment.svg';
import { ReactComponent as IconConnection } from '../../../assets/icon/icon-connection.svg';
import { ReactComponent as IconDatepicker } from '../../../assets/icon/icon-datepicker.svg';
import { ReactComponent as IconDelete } from '../../../assets/icon/icon-delete.svg';
import { ReactComponent as IconDivert } from '../../../assets/icon/icon-divert.svg';
import { ReactComponent as IconDocumentAdd } from '../../../assets/icon/icon-document-add.svg';
import { ReactComponent as IconDocument } from '../../../assets/icon/icon-document.svg';
import { ReactComponent as IconDownload } from '../../../assets/icon/icon-download.svg';
import { ReactComponent as IconEdit } from '../../../assets/icon/icon-edit.svg';
import { ReactComponent as IconEntry } from '../../../assets/icon/icon-entry.svg';
import { ReactComponent as IconExclamationSign } from '../../../assets/icon/icon-exclamation-sign.svg';
import { ReactComponent as IconEyeOpen } from '../../../assets/icon/icon-eye-open.svg';
import { ReactComponent as IconFacility } from '../../../assets/icon/icon-facility.svg';
import { ReactComponent as IconFamily } from '../../../assets/icon/icon-family.svg';
import { ReactComponent as IconFlag } from '../../../assets/icon/icon-flag.svg';
import { ReactComponent as IconForum } from '../../../assets/icon/icon-forum.svg';
import { ReactComponent as IconHome } from '../../../assets/icon/icon-home.svg';
import { ReactComponent as IconImageAdd } from '../../../assets/icon/icon-image-add.svg';
import { ReactComponent as IconImage } from '../../../assets/icon/icon-image.svg';
import { ReactComponent as IconInfoSign } from '../../../assets/icon/icon-info-sign.svg';
import { ReactComponent as IconLedger } from '../../../assets/icon/icon-ledger.svg';
import { ReactComponent as IconListAlt } from '../../../assets/icon/icon-list-alt.svg';
import { ReactComponent as IconList } from '../../../assets/icon/icon-list.svg';
import { ReactComponent as IconLock } from '../../../assets/icon/icon-lock.svg';
import { ReactComponent as IconMapMarker } from '../../../assets/icon/icon-map-marker.svg';
import { ReactComponent as IconMeeting } from '../../../assets/icon/icon-meeting.svg';
import { ReactComponent as IconMemo } from '../../../assets/icon/icon-memo.svg';
import { ReactComponent as IconMessageRead } from '../../../assets/icon/icon-message-read.svg';
import { ReactComponent as IconMessageUnread } from '../../../assets/icon/icon-message-unread.svg';
import { ReactComponent as IconMessage } from '../../../assets/icon/icon-message.svg';
import { ReactComponent as IconMicrophoneOff } from '../../../assets/icon/icon-microphone-off.svg';
import { ReactComponent as IconMicrophone } from '../../../assets/icon/icon-microphone.svg';
import { ReactComponent as IconPencil } from '../../../assets/icon/icon-pencil.svg';
import { ReactComponent as IconPluralReply } from '../../../assets/icon/icon-plural-reply.svg';
import { ReactComponent as IconPrint } from '../../../assets/icon/icon-print.svg';
import { ReactComponent as IconReceiver } from '../../../assets/icon/icon-receiver.svg';
import { ReactComponent as IconRecord } from '../../../assets/icon/icon-record.svg';
import { ReactComponent as IconRepeat } from '../../../assets/icon/icon-repeat.svg';
import { ReactComponent as IconReply } from '../../../assets/icon/icon-reply.svg';
import { ReactComponent as IconScreenShare } from '../../../assets/icon/icon-screenshare.svg';
import { ReactComponent as IconSearch } from '../../../assets/icon/icon-search.svg';
import { ReactComponent as IconSetting } from '../../../assets/icon/icon-setting.svg';
import { ReactComponent as IconSort } from '../../../assets/icon/icon-sort.svg';
import { ReactComponent as IconStaffMale } from '../../../assets/icon/icon-staff-male.svg';
import { ReactComponent as IconStatsOff } from '../../../assets/icon/icon-stats-off.svg';
import { ReactComponent as IconStats } from '../../../assets/icon/icon-stats.svg';
import { ReactComponent as IconStop } from '../../../assets/icon/icon-stop.svg';
import { ReactComponent as IconSummary } from '../../../assets/icon/icon-summary.svg';
import { ReactComponent as IconThList } from '../../../assets/icon/icon-th-list.svg';
import { ReactComponent as IconTriangleDown } from '../../../assets/icon/icon-triangle-down.svg';
import { ReactComponent as IconTriangleUpDown } from '../../../assets/icon/icon-triangle-up-down.svg';
import { ReactComponent as IconTriangleUp } from '../../../assets/icon/icon-triangle-up.svg';
import { ReactComponent as IconUserMale } from '../../../assets/icon/icon-user-male.svg';
import { ReactComponent as IconVideomeetingOff } from '../../../assets/icon/icon-videomeeting-off.svg';
import { ReactComponent as IconVideomeeting } from '../../../assets/icon/icon-videomeeting.svg';
import { ReactComponent as IconVoteOff } from '../../../assets/icon/icon-vote-off.svg';
import { ReactComponent as IconVote } from '../../../assets/icon/icon-vote.svg';
import { ReactComponent as IconWhoami } from '../../../assets/icon/icon-whoami.svg';

/**
 * アイコン名称タイプを定義する
 */
export type IconNameType =
  | 'alert'
  | 'alignJustify'
  | 'arrowUp'
  | 'ban'
  | 'bbs'
  | 'board'
  | 'bookmark'
  | 'calendar'
  | 'cameraSwitch'
  | 'camera'
  | 'cancel'
  | 'category'
  | 'chat'
  | 'check'
  | 'checkup'
  | 'chevronDown'
  | 'chevronUp'
  | 'chevronPrev'
  | 'chevronNext'
  | 'chevronUpDown'
  | 'circular'
  | 'clip'
  | 'clock'
  | 'comment'
  | 'connection'
  | 'datepicker'
  | 'delete'
  | 'divert'
  | 'document'
  | 'documentAdd'
  | 'download'
  | 'edit'
  | 'entry'
  | 'exclamationSign'
  | 'eyeOpen'
  | 'facility'
  | 'family'
  | 'flag'
  | 'forum'
  | 'home'
  | 'image'
  | 'imageAdd'
  | 'infoSign'
  | 'ledger'
  | 'listAlt'
  | 'list'
  | 'lock'
  | 'mapMarker'
  | 'meeting'
  | 'memo'
  | 'messageRead'
  | 'messageUnread'
  | 'message'
  | 'microphoneOff'
  | 'microphone'
  | 'pencil'
  | 'pluralReply'
  | 'print'
  | 'receiver'
  | 'record'
  | 'repeat'
  | 'reply'
  | 'screenshare'
  | 'search'
  | 'setting'
  | 'sort'
  | 'staffMale'
  | 'stats'
  | 'statsOff'
  | 'stop'
  | 'summary'
  | 'thList'
  | 'triangleUpDown'
  | 'triangleUp'
  | 'triangleDown'
  | 'userMale'
  | 'videomeetingOff'
  | 'videomeeting'
  | 'vote'
  | 'voteOff'
  | 'whoami';

export type SizeType = '_10' | '_12' | '_14' | '_16' | '_18' | '_24' | '_32';
export type ColorType =
  | 'default'
  | 'gray'
  | 'lightGray'
  | 'red'
  | 'darkRed'
  | 'blue'
  | 'sky'
  | 'green'
  | 'orange'
  | 'white'
  | 'ash';

type Content = {
  name: IconNameType;
  onClick?: VoidFunction;
};

type Style = {
  setSize?: SizeType;
  setTabletSize?: SizeType;
  setMobileSize?: SizeType;
  setColor?: ColorType;
};

type IconProps = Content &
  Style &
  Pick<HTMLAttributes<HTMLSpanElement>, 'className'>;

export const iconSize: Record<SizeType, string> = {
  _10: SIZE.FONT._10,
  _12: SIZE.FONT._12,
  _14: SIZE.FONT._14,
  _16: SIZE.FONT._16,
  _18: SIZE.FONT._18,
  _24: SIZE.FONT._24,
  _32: SIZE.FONT._32,
};
const iconColor: Record<ColorType, string> = {
  default: COLOR.ICON.DEFAULT,
  gray: COLOR.ICON.GRAY,
  lightGray: COLOR.ICON.LIGHT_GRAY,
  red: COLOR.ICON.RED,
  darkRed: COLOR.ICON.DARK_RED,
  blue: COLOR.ICON.BLUE,
  sky: COLOR.ICON.SKY,
  green: COLOR.ICON.GREEN,
  orange: COLOR.ICON.ORANGE,
  white: COLOR.ICON.WHITE,
  ash: COLOR.FONT.GRAY_500,
};

// SVGを全てStyledComponent化するのは無駄かつ、cssの管理的にも問題ないので例外的にcssの使用を許可
const IconStyle = (setColor?: ColorType) =>
  css({
    minWidth: '10px',
    width: '100%',
    height: '100%',
    fill: setColor ? iconColor[setColor] : COLOR.ICON.DEFAULT,
  });

const Wrapper = styled('span')<Omit<Style, 'setColor'>>(
  ({ setSize, setTabletSize, setMobileSize }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    width: setSize ? iconSize[setSize] : iconSize._16,
    minWidth: setSize ? iconSize[setSize] : iconSize._16,
    height: setSize ? iconSize[setSize] : iconSize._16,
    [BREAKPOINT.TABLET]: {
      width: setTabletSize ? iconSize[setTabletSize] : undefined,
    },
    [BREAKPOINT.MOBILE]: {
      width: setMobileSize ? iconSize[setMobileSize] : undefined,
    },
  }),
);
const Icon: React.FC<IconProps> = ({
  name,
  className,
  onClick,
  setSize,
  setTabletSize,
  setMobileSize,
  setColor,
}) => (
  <Wrapper
    onClick={onClick}
    setSize={setSize}
    setTabletSize={setTabletSize}
    setMobileSize={setMobileSize}
    className={className}
  >
    {name === 'alert' && <IconAlert className={IconStyle(setColor)} />}
    {name === 'alignJustify' && (
      <IconAlignJustify className={IconStyle(setColor)} />
    )}
    {name === 'arrowUp' && <IconArrowUp className={IconStyle(setColor)} />}
    {name === 'ban' && <IconBan className={IconStyle(setColor)} />}
    {name === 'bbs' && <IconBbs className={IconStyle(setColor)} />}
    {name === 'board' && <IconBoard className={IconStyle(setColor)} />}
    {name === 'bookmark' && <IconBookMark className={IconStyle(setColor)} />}
    {name === 'calendar' && <IconCalendar className={IconStyle(setColor)} />}
    {name === 'cameraSwitch' && (
      <IconCameraSwitch className={IconStyle(setColor)} />
    )}
    {name === 'camera' && <IconCamera className={IconStyle(setColor)} />}
    {name === 'cancel' && <IconCancel className={IconStyle(setColor)} />}
    {name === 'category' && <IconCategory className={IconStyle(setColor)} />}
    {name === 'check' && <IconCheck className={IconStyle(setColor)} />}
    {name === 'checkup' && <IconCheckup className={IconStyle(setColor)} />}
    {name === 'chevronDown' && (
      <IconChevronDown className={IconStyle(setColor)} />
    )}
    {name === 'chevronUp' && <IconChevronUp className={IconStyle(setColor)} />}
    {name === 'chevronPrev' && (
      <IconChevronPrev className={IconStyle(setColor)} />
    )}
    {name === 'chevronNext' && (
      <IconChevronNext className={IconStyle(setColor)} />
    )}
    {name === 'chevronUpDown' && (
      <IconChevronUpDown className={IconStyle(setColor)} />
    )}
    {name === 'circular' && <IconCircular className={IconStyle(setColor)} />}
    {name === 'clip' && <IconClip className={IconStyle(setColor)} />}
    {name === 'clock' && <IconClock className={IconStyle(setColor)} />}
    {name === 'comment' && <IconComment className={IconStyle(setColor)} />}
    {name === 'connection' && (
      <IconConnection className={IconStyle(setColor)} />
    )}
    {name === 'datepicker' && (
      <IconDatepicker className={IconStyle(setColor)} />
    )}
    {name === 'delete' && <IconDelete className={IconStyle(setColor)} />}
    {name === 'divert' && <IconDivert className={IconStyle(setColor)} />}
    {name === 'document' && <IconDocument className={IconStyle(setColor)} />}
    {name === 'documentAdd' && (
      <IconDocumentAdd className={IconStyle(setColor)} />
    )}
    {name === 'download' && <IconDownload className={IconStyle(setColor)} />}
    {name === 'edit' && <IconEdit className={IconStyle(setColor)} />}
    {name === 'entry' && <IconEntry className={IconStyle(setColor)} />}
    {name === 'exclamationSign' && (
      <IconExclamationSign className={IconStyle(setColor)} />
    )}
    {name === 'eyeOpen' && <IconEyeOpen className={IconStyle(setColor)} />}
    {name === 'facility' && <IconFacility className={IconStyle(setColor)} />}
    {name === 'family' && <IconFamily className={IconStyle(setColor)} />}
    {name === 'flag' && <IconFlag className={IconStyle(setColor)} />}
    {name === 'forum' && <IconForum className={IconStyle(setColor)} />}
    {name === 'home' && <IconHome className={IconStyle(setColor)} />}
    {name === 'image' && <IconImage className={IconStyle(setColor)} />}
    {name === 'imageAdd' && <IconImageAdd className={IconStyle(setColor)} />}
    {name === 'infoSign' && <IconInfoSign className={IconStyle(setColor)} />}
    {name === 'ledger' && <IconLedger className={IconStyle(setColor)} />}
    {name === 'list' && <IconList className={IconStyle(setColor)} />}
    {name === 'listAlt' && <IconListAlt className={IconStyle(setColor)} />}
    {name === 'lock' && <IconLock className={IconStyle(setColor)} />}
    {name === 'mapMarker' && <IconMapMarker className={IconStyle(setColor)} />}
    {name === 'meeting' && <IconMeeting className={IconStyle(setColor)} />}
    {name === 'memo' && <IconMemo className={IconStyle(setColor)} />}
    {name === 'messageRead' && (
      <IconMessageRead className={IconStyle(setColor)} />
    )}
    {name === 'messageUnread' && (
      <IconMessageUnread className={IconStyle(setColor)} />
    )}
    {name === 'message' && <IconMessage className={IconStyle(setColor)} />}
    {name === 'microphoneOff' && (
      <IconMicrophoneOff className={IconStyle(setColor)} />
    )}
    {name === 'microphone' && (
      <IconMicrophone className={IconStyle(setColor)} />
    )}
    {name === 'pencil' && <IconPencil className={IconStyle(setColor)} />}
    {name === 'pluralReply' && (
      <IconPluralReply className={IconStyle(setColor)} />
    )}
    {name === 'print' && <IconPrint className={IconStyle(setColor)} />}
    {name === 'receiver' && <IconReceiver className={IconStyle(setColor)} />}
    {name === 'record' && <IconRecord className={IconStyle(setColor)} />}
    {name === 'repeat' && <IconRepeat className={IconStyle(setColor)} />}
    {name === 'reply' && <IconReply className={IconStyle(setColor)} />}
    {name === 'screenshare' && (
      <IconScreenShare className={IconStyle(setColor)} />
    )}
    {name === 'search' && <IconSearch className={IconStyle(setColor)} />}
    {name === 'setting' && <IconSetting className={IconStyle(setColor)} />}
    {name === 'sort' && <IconSort className={IconStyle(setColor)} />}
    {name === 'staffMale' && <IconStaffMale className={IconStyle(setColor)} />}
    {name === 'stats' && <IconStats className={IconStyle(setColor)} />}
    {name === 'statsOff' && <IconStatsOff className={IconStyle(setColor)} />}
    {name === 'stop' && <IconStop className={IconStyle(setColor)} />}
    {name === 'summary' && <IconSummary className={IconStyle(setColor)} />}
    {name === 'thList' && <IconThList className={IconStyle(setColor)} />}
    {name === 'triangleUpDown' && (
      <IconTriangleUpDown className={IconStyle(setColor)} />
    )}
    {name === 'triangleUp' && (
      <IconTriangleUp className={IconStyle(setColor)} />
    )}
    {name === 'triangleDown' && (
      <IconTriangleDown className={IconStyle(setColor)} />
    )}
    {name === 'userMale' && <IconUserMale className={IconStyle(setColor)} />}
    {name === 'videomeeting' && (
      <IconVideomeeting className={IconStyle(setColor)} />
    )}
    {name === 'videomeetingOff' && (
      <IconVideomeetingOff className={IconStyle(setColor)} />
    )}
    {name === 'vote' && <IconVote className={IconStyle(setColor)} />}
    {name === 'voteOff' && <IconVoteOff className={IconStyle(setColor)} />}
    {name === 'whoami' && <IconWhoami className={IconStyle(setColor)} />}
  </Wrapper>
);

Icon.defaultProps = {
  setSize: '_16',
  setTabletSize: undefined,
  setMobileSize: undefined,
  setColor: 'default',
  onClick: undefined,
};

export default Icon;
