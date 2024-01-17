import Styled from '@emotion/styled';
import IconActionAnchor from '@molecules/IconActionAnchor/IconActionAnchor';
import {
  BOXSHADOW,
  BREAKPOINT,
  COLOR,
  CONTENT_SIZE,
  SIZE,
} from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type Style = {
  contentSizeMax?: boolean;
};

export type HeaderPropsType = Style &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const Wrapper = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  minHeight: '38px',
  justifyContent: 'center',
  background: COLOR.BACKGROUND.GRAY_900,
  boxShadow: BOXSHADOW.MIDDLE,
  lineHeight: SIZE.LINEHEIGHT.RESET,
  boxSizing: 'border-box',
});

const HeaderContent = Styled('div')<{ contentSizeMax?: boolean }>(
  {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: `${SIZE.PADDING._0} ${SIZE.PADDING._16}`,
    maxWidth: CONTENT_SIZE.MIDDLE,
  },
  ({ contentSizeMax }) =>
    contentSizeMax === true && {
      maxWidth: CONTENT_SIZE.MAX,
    },
);

const NavigationWrapper = Styled('div')({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._24,
});

const ControlWrapper = Styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._24,
  [BREAKPOINT.TABLET]: {
    justifyContent: 'right',
    flex: 1,
  },
});

const NavigationItem = Styled(IconActionAnchor)({
  ':hover': {
    textDecoration: 'none',
  },
});
const Header: React.FC<HeaderPropsType> = ({ className, contentSizeMax }) => {
  console.log('render Header');

  return (
    <Wrapper className={className}>
      <HeaderContent contentSizeMax={contentSizeMax}>
        <NavigationWrapper>
          <NavigationItem
            iconName="home"
            setColor="lightGray"
            onClick={() => {
              console.log('ダッシュボード');
            }}
          >
            ダッシュボード
          </NavigationItem>
          {/* Ph2以降 アクセス集計page追加予定 */}
        </NavigationWrapper>
        <ControlWrapper>
          <NavigationItem
            iconName="entry"
            setColor="lightGray"
            onClick={() => {
              console.log('新規契約追加');
            }}
          >
            法人契約追加
          </NavigationItem>
          <NavigationItem
            iconName="entry"
            setColor="lightGray"
            onClick={() => {
              console.log('新規契約追加');
            }}
          >
            地域契約追加
          </NavigationItem>
          <NavigationItem
            iconName="category"
            setColor="lightGray"
            onClick={() => {
              console.log('マスター管理');
            }}
          >
            マスター管理
          </NavigationItem>
          <NavigationItem
            iconName="alert"
            setColor="lightGray"
            onClick={() => {
              console.log('マスター管理');
            }}
          >
            ポップアップ設定
          </NavigationItem>
          {/* <NavigationItem
            iconName="setting"
            setColor="lightGray"
            onClick={() => {
              console.log('設定');
            }}
          >
            設定
          </NavigationItem> */}
        </ControlWrapper>
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
