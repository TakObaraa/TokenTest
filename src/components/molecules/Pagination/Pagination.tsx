import Button from '@atoms/Button/Button';
import Styled from '@emotion/styled';
import { COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  onClick: (newPage: number) => void;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

/** StyledComponent */
const Wrapper = Styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: SIZE.GAP._4,
});

const Ellipsis = Styled.span({
  padding: `${SIZE.PADDING._4}`,
});

const PageButton = Styled(Button)<{ isActive: boolean }>(({ isActive }) => ({
  borderRadius: SIZE.RADIUS.DEFAULT,
  boxSizing: 'border-box',
  justifyContent: 'center',
  textOverflow: 'ellipsis',
  textAlign: 'center',
  border: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
  padding: `${SIZE.PADDING._4} ${SIZE.PADDING._8}`,
  color: isActive ? COLOR.BACKGROUND.GRAY_0 : COLOR.BACKGROUND.BLUE_600,
  background: isActive ? COLOR.BACKGROUND.BLUE_600 : COLOR.BACKGROUND.GRAY_0,

  ':hover': {
    color: isActive ? COLOR.BACKGROUND.GRAY_0 : COLOR.BACKGROUND.BLUE_600,
    border: `${SIZE.BORDER._1} solid ${COLOR.BORDER.DEFAULT}`,
    background: isActive ? COLOR.BACKGROUND.BLUE_600 : COLOR.BACKGROUND.GRAY_0,
  },
}));

/** ReactComponent */
const Pagination: React.FC<PaginationProps> = ({
  className,
  currentPage,
  totalPage,
  onClick,
}) => {
  // 表示するボタンの個数
  const pageButtonCount = 7;
  const halfButtonCount = Math.floor(pageButtonCount / 2);

  // 現在のページ番号
  const currentPageNumber = Math.min(Math.max(currentPage, 1), totalPage);

  // 前のページを定義する
  // 現在表示しているページ番号が表示するボタンの個数の半分より上の場合、前ページの省略を行う PageButtonCount=5の場合は3以上
  const showPrevMore =
    totalPage > pageButtonCount && currentPageNumber - halfButtonCount > 1;

  // 次のページを定義する
  // 現在表示しているページ番号が総ページ数から表示するボタンの個数の半分を引いた数以下であれば次ページの省略を行う
  const showNextMore =
    totalPage > pageButtonCount &&
    currentPageNumber + halfButtonCount < totalPage;

  // １ページ目と最後のページを除いた省略されない部分のページ番号のリスト
  const pagers = [];
  let startPage;
  let endPage;

  if (showPrevMore) {
    // 後のボタンを表示する場合
    if (showNextMore) {
      const offset = Math.floor(pageButtonCount / 2) - 1;
      // 開始ページ番号設定
      startPage = currentPageNumber - offset;
      // 終了ページ番号設定
      endPage = currentPageNumber + offset + 1;
    }
    // 後のボタンを表示しない場合
    else {
      // 終了ページ番号設定
      endPage = totalPage;
      startPage = endPage - pageButtonCount + 3;
    }
  } else {
    startPage = 2;
    endPage = Math.min(pageButtonCount, totalPage) - 1;
  }

  // 改ページボタンリストを処理する
  for (; startPage < endPage; startPage += 1) {
    pagers.push(startPage);
  }

  return (
    <Wrapper className={className}>
      {/* 先頭ページ */}
      <PageButton isActive={currentPageNumber === 1} onClick={() => onClick(1)}>
        1
      </PageButton>

      {/* 前のページを表示する場合、「…」ボタンを表示する */}
      {showPrevMore && <Ellipsis>…</Ellipsis>}

      {pagers.map((pagerItem) => (
        <PageButton
          key={pagerItem}
          isActive={currentPageNumber === pagerItem}
          onClick={() => onClick(pagerItem)}
        >
          {pagerItem.toString()}
        </PageButton>
      ))}

      {/* 次のページを表示する場合、「…」ボタンを表示する */}
      {showNextMore && <Ellipsis>…</Ellipsis>}

      {/* 総ページ数が1より大きい場合、最終ページを表示する */}
      {totalPage > 1 && (
        <PageButton
          isActive={currentPageNumber === totalPage}
          onClick={() => onClick(totalPage)}
        >
          {totalPage.toString()}
        </PageButton>
      )}
    </Wrapper>
  );
};

export default Pagination;
