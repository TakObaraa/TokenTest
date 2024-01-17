import Bookmark from '@atoms/Bookmark/Bookmark';
import Button, { ButtonSizeOptionType, ButtonType } from '@atoms/Button/Button';
import ColorIcon, { ColorIconNameType } from '@atoms/ColorIcon/ColorIcon';
import Heading, {
  FontSizeOptionType,
  TextColorType,
} from '@atoms/Heading/Heading';
import Icon, { ColorType, IconNameType } from '@atoms/Icon/Icon';
// Todo create Test Storybook
// Todo sectionパターン追加 コンポーネント分ける？
import Styled from '@emotion/styled';
import { BOXSHADOW, COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes, ReactNode } from 'react';

export type AppCardType = {
  cardTitle?: string;
  cardTitleIcon?: IconNameType;
  cardTitleColorIcon?: ColorIconNameType;
  headerRight?: ReactNode;
  bookmarkActive?: boolean;
  bookmarkAction?: VoidFunction;
  setIconColor?: ColorType;
};

export type AppCardStyleType = {
  setHeaderWrap?: boolean;
  setTitleFontSize?: FontSizeOptionType;
  setTitleFontBold?: boolean;
  isAlert?: boolean;
  setFontColor?: TextColorType;
};

type AppCardProps = AppCardType &
  AppCardStyleType &
  Pick<HTMLAttributes<HTMLElement>, 'children' | 'className'>;

/** StyledComponent */
const Wrapper = Styled('section')<Pick<AppCardStyleType, 'isAlert'>>(
  {
    display: 'flex',
    flexDirection: 'column',
    border: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
    borderRadius: SIZE.RADIUS.DEFAULT,
    boxShadow: BOXSHADOW.BASE,
    overflow: 'hidden',
  },
  ({ isAlert }) =>
    isAlert === true && {
      border: `${SIZE.BORDER._2} solid ${COLOR.BORDER.DANGER}`,
    },
);

const Header = Styled('div')<{ setHeaderWrap?: boolean }>(
  {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    // justifyContent: 'space-between',
    minHeight: '40px',
    padding: SIZE.PADDING._8,
    gap: SIZE.GAP._8,
    backgroundColor: COLOR.BACKGROUND.GRAY_10,
    borderBottom: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
  },
  ({ setHeaderWrap }) =>
    setHeaderWrap && {
      flexWrap: 'wrap',
    },
);

const CardIconTitle = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._8,
});
const CardTitle = Styled(Heading)();
const CardBookmarkTitle = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._8,
});
const HeaderRight = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN.AUTO}`,
});
/**
 * AppCardの子要素のみで使用可能なコンポーネント
 * コンテンツコントロールをラップするクラス
 */
export const AppCardContentControl = Styled('div')({
  display: 'flex',
  minHeight: '32px',
  borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
});

/**
 * AppCardの子要素のみで使用可能なコンポーネント
 * コンテンツコントロール内のボタン
 * Activeはprimary、非ActiveはsecondaryをsetTypeにセットして使用する
 * どこでスタイル調整してるのか行方不明にならないようにするため色やサイズのコントロールなどは基本的にButtonコンポーネント側のプロパティに任せる
 */
export const AppCardContentControlButton = Styled(Button)<{
  setType?: Extract<ButtonType, 'primary' | 'other' | 'secondary' | 'light'>;
  setSize?: ButtonSizeOptionType;
  // isIconButton?: boolean;
}>(
  {
    border: 'none',
    borderRight: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
    borderRadius: SIZE.RADIUS.ZERO,
    minHeight: '32px',
    height: '100%',
  },
  ({ setType }) =>
    setType === ('primary' || undefined) && {
      ':hover': {
        background: COLOR.BACKGROUND.BLUE_600,
        border: 'none',
        borderRight: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
      },
    },
);
AppCardContentControlButton.defaultProps = {
  setSize: 'wide',
  setType: 'secondary',
};

/**
 * AppCardの子要素のみで使用可能なコンポーネント
 * Header直下にカードに関する説明やバリデーションメッセージを表示したい場合に使用
 */
export const AppCardMessage = Styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: `${SIZE.GAP._8}`,
  padding: `${SIZE.PADDING._8}`,
  minHeight: '32px',
  borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
});

/**
 * AppCardの子要素のみで使用可能なコンポーネント
 * 下書き用
 */
// export const AppCardDraftNotification = Styled(DraftNotification)({
//   border: 'none',
//   borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
//   borderRadius: SIZE.RADIUS.ZERO,
//   boxShadow: 'none',
// });

/** ReactComponent */
const AppCard: React.FC<AppCardProps> = ({
  cardTitle,
  cardTitleIcon,
  cardTitleColorIcon,
  headerRight,
  setHeaderWrap,
  setTitleFontSize,
  setTitleFontBold,
  isAlert,
  bookmarkActive,
  bookmarkAction,
  children,
  className,
  setFontColor,
  setIconColor,
}) => {
  console.log('render AppCard');
  return (
    <Wrapper className={className} isAlert={isAlert}>
      <Header setHeaderWrap={setHeaderWrap}>
        {/* 通常アイコンパターン */}
        {cardTitle && cardTitleIcon && !cardTitleColorIcon && (
          // <CardIconTitle
          //   iconName={cardTitleIcon}
          //   setFontSize={setTitleFontSize}
          //   setIconSize="_16"
          //   setGap="_8"
          //   resetLineHeight
          //   setBold={setTitleFontBold}
          //   setFontColor={setFontColor}
          //   setIconColor={setIconColor}
          // >
          //   {cardTitle}
          <CardIconTitle>
            <Icon setSize="_16" name={cardTitleIcon} setColor={setIconColor} />
            <CardTitle
              setType="h2"
              setFontSize={setTitleFontSize}
              setBold={setTitleFontBold}
              setColor={setFontColor}
              resetLineHeight
            >
              {cardTitle}
            </CardTitle>
          </CardIconTitle>
        )}
        {/* カラーアイコンパターン */}
        {cardTitle && !cardTitleIcon && cardTitleColorIcon && (
          <CardIconTitle>
            <ColorIcon setSize="_16" name={cardTitleColorIcon} />
            <CardTitle
              setType="h2"
              setFontSize={setTitleFontSize}
              setBold={setTitleFontBold}
              resetLineHeight
            >
              {cardTitle}
            </CardTitle>
          </CardIconTitle>
        )}
        {/* アイコンなしパターン */}
        {cardTitle &&
          !cardTitleIcon &&
          !cardTitleColorIcon &&
          bookmarkAction === undefined &&
          bookmarkActive === undefined && (
            <CardTitle
              setType="h2"
              setFontSize={setTitleFontSize}
              setBold={setTitleFontBold}
              resetLineHeight
            >
              {cardTitle}
            </CardTitle>
          )}
        {/* ブックマークアイコンパターン */}
        {cardTitle &&
          !cardTitleIcon &&
          !cardTitleColorIcon &&
          bookmarkAction &&
          bookmarkActive !== undefined && (
            // Memo 会議室ぐらいでしか使わないかも 基本的にパターンを増やしたくないので分離も検討
            <CardBookmarkTitle>
              <Bookmark
                onClick={bookmarkAction}
                isActive={bookmarkActive}
                setSize="_24"
              />
              <CardTitle
                setType="h2"
                setFontSize={setTitleFontSize}
                resetLineHeight
                setBold={setTitleFontBold}
              >
                {cardTitle}
              </CardTitle>
            </CardBookmarkTitle>
          )}
        <HeaderRight>{headerRight && headerRight}</HeaderRight>
      </Header>
      {children}
    </Wrapper>
  );
};

AppCard.defaultProps = {
  cardTitle: undefined,
  cardTitleIcon: undefined,
  headerRight: undefined,
  setHeaderWrap: false,
  bookmarkActive: undefined,
  bookmarkAction: undefined,
  setTitleFontSize: '_18',
  setTitleFontBold: false,
  isAlert: false,
  setFontColor: 'default',
  setIconColor: 'default',
};

export default AppCard;
