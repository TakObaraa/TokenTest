import Badge from '@atoms/Badge/Badge';
// Todo create Test and Storybook
import Styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type MenuType = {
  label: string;
  // TODO: 後でonClickに統一
  path?: string;
  onClick?: VoidFunction;
  isUpdate?: boolean;
};

type Contents = {
  activeMenu?: number;
  menus: MenuType[];
};

type SegmentProps = Contents &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

/** StyleComponent */
const Wrapper = Styled('div')({
  width: 'min-content',
  overflowX: 'auto',
  maxWidth: '100%',
  border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  borderRadius: SIZE.RADIUS.DEFAULT,
  '::-webkit-scrollbar': {
    display: 'none',
  },
  display: 'flex',
  cursor: 'pointer',
});
// Todo: aタグ廃止
const MenuAnchor = Styled('a')<{ isActive: boolean }>(
  {
    padding: `${SIZE.PADDING._8} ${SIZE.PADDING._12}`,
    whiteSpace: 'nowrap',
    borderRight: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
    fontSize: '12px',
    color: COLOR.FONT.LINK,
    textDecoration: 'none',
    ':last-of-type': {
      border: 'none',
    },
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
  ({ isActive }) =>
    isActive && {
      background: COLOR.BACKGROUND.BLUE_600,
      color: COLOR.FONT.GRAY_0,
    },
);

/** ReactComponent */
const Segment: React.FC<SegmentProps> = ({ activeMenu, menus, className }) => {
  console.log('render Segment');
  return (
    <Wrapper className={className}>
      {menus.map((menu, index) => (
        <MenuAnchor
          key={`key-${index.toString()}`}
          isActive={activeMenu === index}
          href={menu.path}
          onClick={menu.onClick}
        >
          {menu.isUpdate && <Badge />}
          {menu.label}
        </MenuAnchor>
      ))}
    </Wrapper>
  );
};

Segment.defaultProps = {
  activeMenu: undefined,
};

export default Segment;
