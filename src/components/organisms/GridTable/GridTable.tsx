import Styled from '@emotion/styled';
import { BOXSHADOW, BREAKPOINT, COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

type ContentsType = {
  setColumn?: number;
};

/** StylesType
 * isBinding: 結合テーブルの場合true
 * useOutlineItem: OutlineGridTableItemを使用する場合true
 */
type StylesType = {
  setBoxShadow?: boolean;
  setBorder?: boolean;
  isBinding?: boolean;
  useOutlineItem?: boolean;
};

export type GridTablePropsType = Pick<
  HTMLAttributes<HTMLDivElement>,
  'className'
> &
  ContentsType &
  StylesType & {
    children: React.ReactNode;
  };

/** StyledComponent */
const Wrapper = Styled('div')<
  Pick<
    GridTablePropsType,
    'setColumn' | 'setBoxShadow' | 'setBorder' | 'isBinding' | 'useOutlineItem'
  >
>(
  ({ setColumn }) =>
    setColumn
      ? { gridTemplateColumns: `repeat(${setColumn}, 1fr)` }
      : undefined,
  ({ setBoxShadow }) => ({
    boxShadow: setBoxShadow ? BOXSHADOW.BASE : 'none',
  }),
  {
    display: 'grid',
    overflow: 'hidden',
    fontSize: SIZE.FONT._12,
    border: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
    borderRadius: SIZE.RADIUS.DEFAULT,
    gap: SIZE.GAP._1,
    backgroundColor: COLOR.BORDER.DEFAULT, // ボーダー用カラー
  },
  ({ setBorder }) =>
    setBorder === false && {
      border: 'none',
      borderRadius: SIZE.RADIUS.ZERO,
    },
  ({ isBinding }) =>
    isBinding === true && {
      backgroundColor: 'inherit',
    },
  ({ useOutlineItem }) =>
    useOutlineItem === true && {
      backgroundColor: 'inherit',
    },
);

// GridTableRow GridTableの子要素としてのみ使用可能なコンポーネント
export const GridTableRow = Styled('div')<{
  setStriped?: boolean;
}>(
  ({ setStriped }) =>
    setStriped
      ? {
          '&:nth-of-type(2n)': {
            backgroundColor: COLOR.BACKGROUND.GRAY_5,
            '>div': {
              backgroundColor: COLOR.BACKGROUND.GRAY_5,
            },
          },
          '&:nth-of-type(2n-1)': {
            backgroundColor: COLOR.BACKGROUND.GRAY_0,
            '>div': {
              backgroundColor: COLOR.BACKGROUND.GRAY_0,
            },
          },
        }
      : undefined,
  {
    display: 'contents',
  },
);
GridTableRow.defaultProps = {
  setStriped: true,
};

/** GridTableStripeRowWrapper
 * １つの列として扱いたいStripeRowをラップするためのコンポーネント
 * インポート先でGridTemplateColumnsを指定
 * StripeRowWrapper > StripeRow > GridTableItemのHTML構造でテーブルを構成すること
 */
export const GridTableStripeRowWrapper = Styled('div')<{
  isResponsiveMobile?: boolean;
  isResponsiveTablet?: boolean;
}>(
  {
    display: 'grid',
    gap: SIZE.GAP._1,
    backgroundColor: COLOR.BORDER.DEFAULT, // ボーダー用カラー
    '&:nth-of-type(2n)': {
      '>div >div': {
        backgroundColor: COLOR.BACKGROUND.GRAY_5,
      },
    },
    '&:nth-of-type(2n-1)': {
      '>div >div': {
        backgroundColor: COLOR.BACKGROUND.GRAY_0,
      },
    },
  },
  ({ isResponsiveTablet }) =>
    isResponsiveTablet === true && {
      [BREAKPOINT.TABLET]: {
        '&:nth-of-type(2n)': {
          backgroundColor: COLOR.BACKGROUND.GRAY_5,
        },
        '&:nth-of-type(2n-1)': {
          backgroundColor: COLOR.BACKGROUND.GRAY_0,
        },
      },
    },
  ({ isResponsiveMobile }) =>
    isResponsiveMobile === true && {
      [BREAKPOINT.MOBILE]: {
        '&:nth-of-type(2n)': {
          backgroundColor: COLOR.BACKGROUND.GRAY_5,
        },
        '&:nth-of-type(2n-1)': {
          backgroundColor: COLOR.BACKGROUND.GRAY_0,
        },
      },
    },
);
/** GridTableStripeRow
 * GridTableStripeRowWrapperとセットで使用
 * １列分のGridTableItemをラップするコンポーネント
 */
export const GridTableStripeRow = Styled('div')({
  display: 'contents',
});

// GridTableItem GridTableの子要素としてのみ使用可能なコンポーネント
// setStripeColor odd（奇数） | even（偶数）
type GridTableItemType = {
  setStartColumn?: number;
  setStartRow?: number;
  setEndColumn?: number;
  setEndRow?: number;
  setColumn?: number;
  setRow?: number;
  setDirection?: 'row' | 'column';
  setPosition?: 'center' | 'right' | 'left';
  resetPadding?: boolean;
  setBackground?: boolean;
  setMobileColumn?: number;
  setMobileRow?: number;
  setTabletColumn?: number;
  setTabletRow?: number;
  setStripeColor?: 'odd' | 'even';
  resetPaddingMobile?: boolean;
  resetPaddingTablet?: boolean;
};
export const GridTableItem = Styled('div')<GridTableItemType>(
  {
    display: 'flex',
    alignItems: 'center',
    padding: SIZE.PADDING._8,
    backgroundColor: COLOR.BACKGROUND.GRAY_0,
    overflow: 'hidden',
    lineHeight: SIZE.LINEHEIGHT.DEFAULT,
  },
  ({ setStartColumn }) =>
    setStartColumn && {
      gridColumnStart: `${setStartColumn}`,
    },
  ({ setStartRow }) =>
    setStartRow && {
      gridRowStart: `${setStartRow}`,
    },
  ({ setEndColumn }) =>
    setEndColumn && {
      gridColumnEnd: `${setEndColumn}`,
    },
  ({ setEndRow }) =>
    setEndRow && {
      gridRowEnd: `${setEndRow}`,
    },
  ({ setColumn }) =>
    setColumn && {
      gridColumn: `span ${setColumn}`,
    },
  ({ setRow }) =>
    setRow && {
      gridRow: `span ${setRow}`,
    },
  ({ setDirection }) =>
    setDirection === 'row' && {
      flexDirection: 'row',
      alignItems: 'center',
    },
  ({ setDirection }) =>
    setDirection === 'column' && {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  ({ setPosition, setDirection }) => {
    if (
      setPosition === 'center' &&
      (setDirection === 'row' || setDirection === undefined)
    ) {
      return {
        justifyContent: 'center',
      };
    }
    if (setPosition === 'center' && setDirection === 'column') {
      return {
        alignItems: 'center',
      };
    }
    if (
      (setPosition === 'left' && setDirection === 'row') ||
      setDirection === undefined
    ) {
      return {
        justifyContent: 'left',
      };
    }
    if (setPosition === 'left' && setDirection === 'column') {
      return {
        alignItems: 'left',
      };
    }
    if (
      (setPosition === 'right' && setDirection === 'row') ||
      setDirection === undefined
    ) {
      return {
        justifyContent: 'right',
      };
    }
    if (setPosition === 'right' && setDirection === 'column') {
      return {
        alignItems: 'right',
      };
    }
    return undefined;
  },
  ({ resetPadding }) =>
    resetPadding && {
      padding: SIZE.PADDING._0,
    },
  ({ setBackground }) => {
    if (setBackground === true) {
      return {
        backgroundColor: COLOR.BACKGROUND.GRAY_5,
      };
    }
    if (setBackground === false) {
      return {
        backgroundColor: 'inherit',
      };
    }
    return undefined;
  },
  ({ setMobileColumn }) =>
    setMobileColumn && {
      [BREAKPOINT.MOBILE]: {
        gridColumn: `span ${setMobileColumn}`,
      },
    },
  ({ setMobileRow }) =>
    setMobileRow && {
      [BREAKPOINT.MOBILE]: {
        gridRow: `span ${setMobileRow}`,
      },
    },
  ({ setTabletColumn }) =>
    setTabletColumn && {
      [BREAKPOINT.TABLET]: {
        gridColumn: `span ${setTabletColumn}`,
      },
    },
  ({ setTabletRow }) =>
    setTabletRow && {
      [BREAKPOINT.MOBILE]: {
        gridRow: `span ${setTabletRow}`,
      },
    },
  ({ setStripeColor }) =>
    setStripeColor && {
      backgroundColor:
        setStripeColor === 'odd'
          ? COLOR.BACKGROUND.GRAY_0
          : COLOR.BACKGROUND.GRAY_5,
    },
  ({ resetPaddingMobile }) =>
    resetPaddingMobile && {
      [BREAKPOINT.MOBILE]: {
        padding: SIZE.PADDING._0,
      },
    },
  ({ resetPaddingTablet }) =>
    resetPaddingTablet && {
      [BREAKPOINT.TABLET]: {
        padding: SIZE.PADDING._0,
      },
    },
);

// GridTableHeaderItem GridTableの子要素としてのみ使用可能なコンポーネント
export const GridTableHeaderItem = Styled(GridTableItem)({
  fontWeight: 'bold',
  backgroundColor: COLOR.BACKGROUND.GRAY_0,
  lineHeight: SIZE.LINEHEIGHT.RESET,
});

// Todo: シン結合テーブルパターン GridTableStripeRowをこっちに変更したい
// GridTableのisBindingをtrueにして以下のコンポーネントをラップして使用
// Memo: GridTemplateColumnはBindingGridTableRowに指定
export const BindingGridTableRow = Styled('div')<{
  setStriped?: boolean;
}>(
  {
    display: 'grid',
    gap: SIZE.GAP._1,
  },
  ({ setStriped }) =>
    setStriped && {
      '&:nth-of-type(2n)': {
        backgroundColor: COLOR.BACKGROUND.GRAY_5,
      },
      '&:nth-of-type(2n-1)': {
        backgroundColor: COLOR.BACKGROUND.GRAY_0,
      },
    },
);
BindingGridTableRow.defaultProps = {
  setStriped: true,
};
export const BindingGridTableHeaderItem = Styled(GridTableHeaderItem)({
  outline: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  backgroundColor: 'inherit',
});
export const BindingGridTableItem = Styled(GridTableItem)({
  outline: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  backgroundColor: 'inherit',
});

// Todo: もうこれデフォルトでよくない
/** OutlineGridTableHeaderItem & OutlineGridTableItem
 * 複雑な結合を行うテーブルは、GridTableの中に別のGridTableを入れたほうがいい場合がある
 * その時親テーブルのStripeを適用するために内包するGridTableの背景色をなくし親テーブルのStripeの色をそのまま表示させる
 * するとセルのボーダーとして使用しているテーブルの背景色がなくなるため、GridTableItem側にoutlineを指定することでセルのボーダーとする
 */
export const OutlineGridTableHeaderItem = Styled(GridTableHeaderItem)({
  outline: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  backgroundColor: 'inherit',
});
export const OutlineGridTableItem = Styled(GridTableItem)({
  outline: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
  backgroundColor: 'inherit',
});

/** ReactComponent */
const GridTable: React.FC<GridTablePropsType> = ({
  className,
  setColumn,
  setBoxShadow,
  setBorder,
  isBinding,
  useOutlineItem,
  children,
}) => {
  console.log('render GridTable');
  return (
    <Wrapper
      className={className}
      setColumn={setColumn}
      setBoxShadow={setBoxShadow}
      setBorder={setBorder}
      isBinding={isBinding}
      useOutlineItem={useOutlineItem}
    >
      {children}
    </Wrapper>
  );
};

export default GridTable;

GridTable.defaultProps = {
  setColumn: undefined,
  setBoxShadow: false,
  setBorder: true,
  isBinding: false,
};
