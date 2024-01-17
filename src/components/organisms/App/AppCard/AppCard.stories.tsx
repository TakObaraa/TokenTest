import { PropsOf } from '@emotion/react';
import styled from '@emotion/styled';
import { Story } from '@storybook/react';
import { SIZE } from '@styles/constant';
import AppCard, {
  AppCardContentControl,
  AppCardContentControlButton,
} from './AppCard';

type AppCardPropsType = PropsOf<typeof AppCard>;

export default {
  title: 'Organisms/App/AppCard',
  component: AppCard,
};

const AppCardContent = styled('div')({
  padding: SIZE.PADDING._8,
});

export const Default: Story<AppCardPropsType> = ({
  cardTitle,
  cardTitleIcon,
  headerRight,
}) => (
  <div className="story-item">
    <AppCard
      cardTitle={cardTitle}
      cardTitleIcon={cardTitleIcon}
      headerRight={headerRight}
    >
      <AppCardContent>
        <p>childrenにコンテンツのReact.Nodeを渡す</p>
      </AppCardContent>
    </AppCard>
  </div>
);

Default.args = {
  cardTitle: 'タイトル',
  cardTitleIcon: 'checkup',
  headerRight: 'ボタンとか補足とか',
};

export const ContentControl: Story<AppCardPropsType> = ({
  cardTitle,
  cardTitleIcon,
  headerRight,
}) => (
  <div className="story-item">
    <AppCard
      cardTitle={cardTitle}
      cardTitleIcon={cardTitleIcon}
      headerRight={headerRight}
    >
      <AppCardContentControl>
        <AppCardContentControlButton>
          コントロールボタン
        </AppCardContentControlButton>
      </AppCardContentControl>
      <AppCardContent>
        <p>
          AppCardから、`AppCardContentControl`と`AppCardContentControlButton`をインポートして使用
        </p>
      </AppCardContent>
    </AppCard>
  </div>
);

ContentControl.args = {
  cardTitle: 'タイトル',
  cardTitleIcon: 'checkup',
  headerRight: 'ボタンとか補足とか',
};

export const Bookmark: Story<AppCardPropsType> = ({
  cardTitle,
  headerRight,
  bookmarkAction,
  bookmarkActive,
}) => (
  <div className="story-item">
    <AppCard
      cardTitle={cardTitle}
      headerRight={headerRight}
      bookmarkAction={bookmarkAction}
      bookmarkActive={bookmarkActive}
    >
      <AppCardContent>
        <p>カードにBookmarkを設定するパターン</p>
        <p>cardTitleIconとの併用不可</p>
      </AppCardContent>
    </AppCard>
  </div>
);

Bookmark.args = {
  cardTitle: 'タイトル',
  headerRight: 'ボタンとか補足とか',
  bookmarkActive: true,
  bookmarkAction: () => console.log('bookmark'),
};
