import Icon from '@atoms/Icon/Icon';
import Link from '@atoms/Link/Link';
import Paragraph from '@atoms/Paragraph/Paragraph';
import Styled from '@emotion/styled';
import Header from '@organisms/Header/Header';
import { COLOR, CONTENT_SIZE, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';
// import IconText from '@molecules/IconText/IconText';

type Style = {
  contentSizeMax?: boolean;
};

type SettingMenusType =
  | 'contractType'
  | 'facilityTypeGroup'
  | 'facilityType'
  | 'feeStructure';

type SettingTemplateProps = {
  children: React.ReactNode;
  activeMenu: SettingMenusType;
  headerRight?: React.ReactNode;
  pageTitle: string;
} & Style &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const Wrapper = Styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: COLOR.BACKGROUND.GRAY_0,
});
const GlobalHeader = Styled(Header)({
  zIndex: 5,
  position: 'sticky',
  top: 0,
});
// const Message = Styled('div')({
//   display: 'flex',
//   backgroundColor: COLOR.BACKGROUND.YELLOW_100,
//   padding: SIZE.PADDING._16,
//   borderRadius: SIZE.RADIUS.DEFAULT,
//   margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
// });
const MainContentsWrap = Styled('div')<{ contentSizeMax?: boolean }>(
  {
    display: 'grid',
    gridTemplateColumns: '212px 1fr',
    flex: 1,
    gap: SIZE.GAP._16,
    flexDirection: 'column',
  },
  ({ contentSizeMax }) =>
    contentSizeMax === true && {
      maxWidth: CONTENT_SIZE.MAX,
    },
);
const Content = Styled('div')({
  maxWidth: CONTENT_SIZE.MIDDLE,
  width: '100%',
  margin: `${SIZE.MARGIN._16} ${SIZE.MARGIN.AUTO} ${SIZE.MARGIN._0}`,
  padding: `${SIZE.PADDING._0} ${SIZE.PADDING._16} ${SIZE.PADDING._40}`,
});
const SettingMenu = Styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
});
const SettingMenuBlock = Styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  borderRadius: SIZE.RADIUS.DEFAULT,
});
const ContentHeader = Styled('div')({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._16} ${SIZE.MARGIN._0}`,
  display: 'flex',
  justifyContent: 'space-between',
});
const ContentTitle = Styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: SIZE.GAP._8,
});
const HeaderRight = Styled('div')({});
const SettingMenuItem = Styled(Link)<{ isActive?: boolean }>(
  ({ isActive }) => ({
    textDecoration: 'none',
    padding: `${SIZE.PADDING._16} ${SIZE.PADDING._16}`,
    borderBottom: isActive
      ? `solid ${SIZE.BORDER._1} ${COLOR.BORDER.BLUE_600}`
      : `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
    backgroundColor: isActive
      ? COLOR.BACKGROUND.BLUE_600
      : COLOR.BACKGROUND.GRAY_0,
    color: isActive ? COLOR.FONT.GRAY_0 : COLOR.FONT.DEFAULT,
    ':first-of-type': {
      borderRadius: `${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.ZERO}`,
    },
    ':last-of-type': {
      borderBottom: 'none',
      borderRadius: `${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.DEFAULT} `,
    },
    ':hover': {
      textDecoration: 'none',
      background: isActive ? undefined : COLOR.BACKGROUND.GRAY_10,
      color: isActive ? COLOR.FONT.GRAY_0 : COLOR.FONT.DEFAULT,
    },
  }),
);
const SettingContent = Styled('div')({});

const SettingTemplate: React.FC<SettingTemplateProps> = ({
  className,
  children,
  contentSizeMax,
  activeMenu,
  headerRight,
  pageTitle,
}) => (
  <Wrapper className={className}>
    <GlobalHeader contentSizeMax={contentSizeMax} />
    <Content>
      <MainContentsWrap contentSizeMax={contentSizeMax}>
        <SettingMenu>
          <SettingMenuBlock>
            <SettingMenuItem isActive={activeMenu === 'contractType'}>
              法人種別管理
            </SettingMenuItem>
            <SettingMenuItem isActive={activeMenu === 'facilityTypeGroup'}>
              事業所種別グループ管理
            </SettingMenuItem>
            <SettingMenuItem isActive={activeMenu === 'facilityType'}>
              事業所種別管理
            </SettingMenuItem>
            <SettingMenuItem isActive={activeMenu === 'feeStructure'}>
              料金体系管理
            </SettingMenuItem>
          </SettingMenuBlock>
        </SettingMenu>
        <SettingContent>
          <ContentHeader>
            <ContentTitle>
              <Icon name="category" setSize="_24" />
              <Paragraph setFontSize="_24">{pageTitle}</Paragraph>
            </ContentTitle>
            <HeaderRight>{headerRight}</HeaderRight>
          </ContentHeader>
          {/* <Message>
            <IconText iconName="exclamationSign">
              追加・編集・削除・並び順変更等を行うと、変更内容がユーザーの画面に反映されます。
            </IconText>
          </Message> */}
          {children}
        </SettingContent>
      </MainContentsWrap>
    </Content>
  </Wrapper>
);

export default SettingTemplate;
