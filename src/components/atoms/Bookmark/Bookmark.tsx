// Memo アイコン自体がボタンなどになるパターンが多ければ共通コンポーネント化するかも
// Todo create Test
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';
import Icon, { SizeType } from '../Icon/Icon';

type Contents = {
  onClick: VoidFunction;
  isActive?: boolean;
};
type Style = {
  setSize?: Extract<SizeType, '_12' | '_16' | '_18' | '_24'>;
  setTabletSize?: Extract<SizeType, '_12' | '_16' | '_18' | '_24'>;
  setMobileSize?: Extract<SizeType, '_12' | '_16' | '_18' | '_24'>;
};

type BookmarkProps = Pick<HTMLAttributes<HTMLSpanElement>, 'className'> &
  Contents &
  Style;

/** StyleComponent */
const Wrapper = Styled(Icon)({
  cursor: 'pointer',
  lineHeight: SIZE.LINEHEIGHT.ZERO,
  ':hover': {
    '> svg': {
      filter: 'brightness(0.7)',
    },
  },
});

/** ReactComponent */
const Bookmark: React.FC<BookmarkProps> = ({
  onClick,
  setSize,
  setTabletSize,
  setMobileSize,
  isActive,
  className,
}) => (
  <Wrapper
    className={className}
    onClick={onClick}
    name="bookmark"
    setColor={isActive ? 'red' : 'lightGray'}
    setSize={setSize}
    setTabletSize={setTabletSize}
    setMobileSize={setMobileSize}
  />
);

Bookmark.defaultProps = {
  setSize: '_12',
  setTabletSize: undefined,
  setMobileSize: undefined,
  isActive: false,
};

export default Bookmark;
