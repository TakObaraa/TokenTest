import { SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

import { ReactComponent as IconBbs } from '../../../assets/color-icon/bbs.svg';
import { ReactComponent as IconBookmark } from '../../../assets/color-icon/bookmark.svg';
import { ReactComponent as IconBrand } from '../../../assets/color-icon/brand.svg';
import { ReactComponent as IconCalendar } from '../../../assets/color-icon/calendar.svg';
import { ReactComponent as IconCancel } from '../../../assets/color-icon/cancel.svg';
import { ReactComponent as IconCareLog } from '../../../assets/color-icon/care-log.svg';
import { ReactComponent as IconCategory } from '../../../assets/color-icon/category.svg';
import { ReactComponent as IconChat } from '../../../assets/color-icon/chat.svg';
import { ReactComponent as IconCheck } from '../../../assets/color-icon/check.svg';
import { ReactComponent as IconCheckUpTube } from '../../../assets/color-icon/checkup-tube.svg';
import { ReactComponent as IconCheckUp } from '../../../assets/color-icon/checkup.svg';
import { ReactComponent as IconCircular } from '../../../assets/color-icon/circular.svg';
import { ReactComponent as IconClip } from '../../../assets/color-icon/clip.svg';
import { ReactComponent as IconClock } from '../../../assets/color-icon/clock.svg';
import { ReactComponent as IconCollection } from '../../../assets/color-icon/collection.svg';
import { ReactComponent as IconCommentDarkgreen } from '../../../assets/color-icon/comment-darkgreen.svg';
import { ReactComponent as IconCommentGreen } from '../../../assets/color-icon/comment-green.svg';
import { ReactComponent as IconConferenceBottom } from '../../../assets/color-icon/conference-bottom.svg';
import { ReactComponent as IconConferenceTop } from '../../../assets/color-icon/conference-top.svg';
import { ReactComponent as IconContribution } from '../../../assets/color-icon/contribution.svg';
import { ReactComponent as IconDelete } from '../../../assets/color-icon/delete.svg';
import { ReactComponent as IconDivert } from '../../../assets/color-icon/divert.svg';
import { ReactComponent as IconDocMed } from '../../../assets/color-icon/doc-med.svg';
import { ReactComponent as IconDocMell } from '../../../assets/color-icon/doc-mell.svg';
import { ReactComponent as IconDocWel } from '../../../assets/color-icon/doc-wel.svg';
import { ReactComponent as IconDocumentDoc } from '../../../assets/color-icon/document-doc.svg';
import { ReactComponent as IconDocument } from '../../../assets/color-icon/document.svg';
import { ReactComponent as IconEdit } from '../../../assets/color-icon/edit.svg';
import { ReactComponent as IconEntry } from '../../../assets/color-icon/entry.svg';
import { ReactComponent as IconExclamationSign } from '../../../assets/color-icon/exclamation-sign.svg';
import { ReactComponent as IconFacility } from '../../../assets/color-icon/facility.svg';
import { ReactComponent as IconFamily } from '../../../assets/color-icon/family.svg';
import { ReactComponent as IconFlag } from '../../../assets/color-icon/flag.svg';
import { ReactComponent as IconForum } from '../../../assets/color-icon/forum.svg';
import { ReactComponent as IconHome } from '../../../assets/color-icon/home.svg';
import { ReactComponent as IconHospital } from '../../../assets/color-icon/hospital.svg';
import { ReactComponent as IconIconsBooks } from '../../../assets/color-icon/icons_books.svg';
import { ReactComponent as IconIconsBreef } from '../../../assets/color-icon/icons_breef.svg';
import { ReactComponent as IconIconsCare } from '../../../assets/color-icon/icons_care.svg';
import { ReactComponent as IconIconsCheck } from '../../../assets/color-icon/icons_check.svg';
import { ReactComponent as IconIconsCircle } from '../../../assets/color-icon/icons_circle.svg';
import { ReactComponent as IconIconsComment } from '../../../assets/color-icon/icons_comment.svg';
import { ReactComponent as IconIconsKarte } from '../../../assets/color-icon/icons_karte.svg';
import { ReactComponent as IconIconsMtgTime } from '../../../assets/color-icon/icons_mtg_time.svg';
import { ReactComponent as IconIconsMtgTxt } from '../../../assets/color-icon/icons_mtg_txt.svg';
import { ReactComponent as IconIconsShop } from '../../../assets/color-icon/icons_shop.svg';
import { ReactComponent as IconImage } from '../../../assets/color-icon/image.svg';
import { ReactComponent as IconInfo } from '../../../assets/color-icon/info.svg';
import { ReactComponent as IconKarteInt } from '../../../assets/color-icon/karte-int.svg';
import { ReactComponent as IconKarteSp } from '../../../assets/color-icon/karte-sp.svg';
import { ReactComponent as IconKarte } from '../../../assets/color-icon/karte.svg';
import { ReactComponent as IconLedger } from '../../../assets/color-icon/ledger.svg';
import { ReactComponent as IconList } from '../../../assets/color-icon/list.svg';
import { ReactComponent as IconMail } from '../../../assets/color-icon/mail.svg';
import { ReactComponent as IconMeeting } from '../../../assets/color-icon/meeting.svg';
import { ReactComponent as IconMemo } from '../../../assets/color-icon/memo.svg';
import { ReactComponent as IconMessage } from '../../../assets/color-icon/message.svg';
import { ReactComponent as IconMinutes } from '../../../assets/color-icon/minutes.svg';
import { ReactComponent as IconPluralReply } from '../../../assets/color-icon/plural-reply.svg';
import { ReactComponent as IconRecord } from '../../../assets/color-icon/record.svg';
import { ReactComponent as IconReply } from '../../../assets/color-icon/reply.svg';
import { ReactComponent as IconSearch } from '../../../assets/color-icon/search.svg';
import { ReactComponent as IconSetting } from '../../../assets/color-icon/setting.svg';
import { ReactComponent as IconSort } from '../../../assets/color-icon/sort.svg';
import { ReactComponent as IconStaffFemale } from '../../../assets/color-icon/staff-female.svg';
import { ReactComponent as IconStaffMale } from '../../../assets/color-icon/staff-male.svg';
import { ReactComponent as IconStop } from '../../../assets/color-icon/stop.svg';
import { ReactComponent as IconSummary } from '../../../assets/color-icon/summary.svg';
import { ReactComponent as IconTag } from '../../../assets/color-icon/tag.svg';
import { ReactComponent as IconUpdate } from '../../../assets/color-icon/update.svg';
import { ReactComponent as IconUserFemale } from '../../../assets/color-icon/user-female.svg';
import { ReactComponent as IconUserMale } from '../../../assets/color-icon/user-male.svg';
import { ReactComponent as IconVideomeeting } from '../../../assets/color-icon/videomeeting.svg';
import { ReactComponent as IconWhoami } from '../../../assets/color-icon/whoami.svg';

export type ColorIconNameType =
  | 'bbs'
  | 'bookmark'
  | 'calendar'
  | 'cancel'
  | 'care-log'
  | 'category'
  | 'chat'
  | 'check'
  | 'checkup-tube'
  | 'checkup'
  | 'circular'
  | 'clip'
  | 'clock'
  | 'collection'
  | 'comment-darkgreen'
  | 'comment-green'
  | 'conference-bottom'
  | 'conference-top'
  | 'contribution'
  | 'delete'
  | 'divert'
  | 'doc-med'
  | 'doc-mell'
  | 'doc-wel'
  | 'document-doc'
  | 'document'
  | 'edit'
  | 'entry'
  | 'exclamation-sign'
  | 'facility'
  | 'family'
  | 'flag'
  | 'forum'
  | 'home'
  | 'hospital'
  | 'icons-books'
  | 'icons-breef'
  | 'icons-care'
  | 'icons-check'
  | 'icons-circle'
  | 'icons-comment'
  | 'icons-karte'
  | 'icons-mtg-time'
  | 'icons-mtg-txt'
  | 'icons-shop'
  | 'image'
  | 'info'
  | 'karte-int'
  | 'karte-sp'
  | 'karte'
  | 'ledger'
  | 'list'
  | 'mail'
  | 'meeting'
  | 'memo'
  | 'message'
  | 'minutes'
  | 'plural-reply'
  | 'record'
  | 'reply'
  | 'search'
  | 'setting'
  | 'sort'
  | 'staff-female'
  | 'staff-male'
  | 'stop'
  | 'summary'
  | 'tag'
  | 'update'
  | 'user-female'
  | 'user-male'
  | 'videomeeting'
  | 'whoami'
  | 'brand';

// Todo: Icon用のconstant用意
export type SizeType =
  | '_10'
  | '_12'
  | '_14'
  | '_16'
  | '_18'
  | '_20'
  | '_24'
  | '_32';
type ColorIconProps = {
  name: ColorIconNameType;
  setSize?: SizeType;
  onClick?: VoidFunction;
} & Pick<HTMLAttributes<HTMLOrSVGElement>, 'className'>;

/**
 * アイコンの関数コンポーネント定義
 * @param iconProps  アイコンコンポーネントのプロパティ
 * @returns アイコンコンポーネント
 */
const ColorIcon: React.FC<ColorIconProps> = ({
  name,
  className,
  setSize,
  onClick,
}) => (
  <>
    {name === 'bbs' && (
      <IconBbs
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'bookmark' && (
      <IconBookmark
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'calendar' && (
      <IconCalendar
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'cancel' && (
      <IconCancel
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'care-log' && (
      <IconCareLog
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'category' && (
      <IconCategory
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'chat' && (
      <IconChat
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'check' && (
      <IconCheck
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'checkup' && (
      <IconCheckUp
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'checkup-tube' && (
      <IconCheckUpTube
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'circular' && (
      <IconCircular
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'clip' && (
      <IconClip
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'clock' && (
      <IconClock
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'collection' && (
      <IconCollection
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'comment-darkgreen' && (
      <IconCommentDarkgreen
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'comment-green' && (
      <IconCommentGreen
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'conference-bottom' && (
      <IconConferenceBottom
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'conference-top' && (
      <IconConferenceTop
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'contribution' && (
      <IconContribution
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'delete' && (
      <IconDelete
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'divert' && (
      <IconDivert
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'doc-med' && (
      <IconDocMed
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'doc-mell' && (
      <IconDocMell
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'doc-wel' && (
      <IconDocWel
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'document' && (
      <IconDocument
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'document-doc' && (
      <IconDocumentDoc
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'edit' && (
      <IconEdit
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'entry' && (
      <IconEntry
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'exclamation-sign' && (
      <IconExclamationSign
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'facility' && (
      <IconFacility
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'family' && (
      <IconFamily
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'flag' && (
      <IconFlag
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'forum' && (
      <IconForum
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'home' && (
      <IconHome
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'hospital' && (
      <IconHospital
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-books' && (
      <IconIconsBooks
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-breef' && (
      <IconIconsBreef
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-care' && (
      <IconIconsCare
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-check' && (
      <IconIconsCheck
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-circle' && (
      <IconIconsCircle
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-comment' && (
      <IconIconsComment
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-karte' && (
      <IconIconsKarte
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-mtg-time' && (
      <IconIconsMtgTime
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-mtg-txt' && (
      <IconIconsMtgTxt
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'icons-shop' && (
      <IconIconsShop
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'image' && (
      <IconImage
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'info' && (
      <IconInfo
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'karte' && (
      <IconKarte
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'karte-int' && (
      <IconKarteInt
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'karte-sp' && (
      <IconKarteSp
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'ledger' && (
      <IconLedger
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'list' && (
      <IconList
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'mail' && (
      <IconMail
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'meeting' && (
      <IconMeeting
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'memo' && (
      <IconMemo
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'message' && (
      <IconMessage
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'minutes' && (
      <IconMinutes
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'plural-reply' && (
      <IconPluralReply
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'record' && (
      <IconRecord
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'reply' && (
      <IconReply
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'search' && (
      <IconSearch
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'setting' && (
      <IconSetting
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'sort' && (
      <IconSort
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'staff-female' && (
      <IconStaffFemale
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'staff-male' && (
      <IconStaffMale
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'stop' && (
      <IconStop
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'summary' && (
      <IconSummary
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'tag' && (
      <IconTag
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'update' && (
      <IconUpdate
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'user-female' && (
      <IconUserFemale
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'user-male' && (
      <IconUserMale
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'videomeeting' && (
      <IconVideomeeting
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'whoami' && (
      <IconWhoami
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
    {name === 'brand' && (
      <IconBrand
        className={className}
        width={setSize ? SIZE.FONT[setSize] : SIZE.FONT._16}
        onClick={onClick}
      />
    )}
  </>
);

export default ColorIcon;

ColorIcon.defaultProps = {
  setSize: '_16',
  onClick: undefined,
};
