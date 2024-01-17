// Todo create Test
import { IconBookmark } from '@app/icons/normal';
import Styled from '@emotion/styled';
import { forwardRef } from 'react';

type Contents = {
  onClick: VoidFunction;
  isActive?: boolean;
};

type BookmarkProps = React.ComponentProps<'button'> & Contents;

/** StyleComponent */
const BookmarkButton = Styled('button')(({ theme }) => ({
  border: 'none',
  background: theme.colors.transparent,
}));

const BookmarkIcon = Styled(IconBookmark)(({ theme }) => ({
  width: theme.sizes['3xs'],
  height: theme.sizes['3xs'],
  cursor: 'pointer',
  lineHeight: theme.lineHeights.reset,

  ':hover': {
    filter: 'brightness(0.7)',
  },
}));

/** ReactComponent */
const Bookmark = forwardRef<HTMLButtonElement, BookmarkProps>(
  (
    {
      isActive,
      ...props
    },
    ref,
  ) => (
    <BookmarkButton
      {...props}
      ref={ref}
    >
      <BookmarkIcon color={isActive ? 'red' : 'lightGray'} />
    </BookmarkButton>
  ),
);

Bookmark.defaultProps = {
  isActive: false,
};

export default Bookmark;
