import styled from '@emotion/styled';
import { LiteralUnion } from '@libraries/type-fest';
import mergeComponents from '@utils/hooks/mergeComponents';

type GridTablePropsType = {
  /** number: `repeat(${setColumn}, 1fr)` */
  setColumn?: number | string;
  setBoxShadow?: boolean;
  setBorder?: boolean;
  setStriped?: boolean;
};

const GridTable = styled('div')<GridTablePropsType>(
  ({ theme, setBorder = true, setBoxShadow = false, setColumn = 1 }) => ({
    display: 'grid',
    gridTemplateColumns:
      typeof setColumn === 'number' ? `repeat(${setColumn}, 1fr)` : setColumn,
    width: theme.sizes.full,
    fontSize: theme.fontSizes.sm,
    border: setBorder ? theme.borders.default : theme.borders.none,
    borderRadius: setBorder ? theme.radius.base : theme.radius.none,
    gap: '1px',
    overflow: 'hidden',
    boxShadow: setBoxShadow ? theme.shadows.default : 'none',
  }),
  ({ theme, setStriped = true }) =>
    setStriped && {
      // div かつ role="row" の奇数行と偶数行の背景色を変更する
      '&>div[role="row"]:nth-of-type(2n)': {
        backgroundColor: theme.colors.gray._5,
      },
      '&>div[role="row"]:nth-of-type(2n-1)': {
        backgroundColor: theme.colors.white,
      },
    },
);

/**
 * GridTableRow GridTableの子要素としてのみ使用可能なコンポーネント
 */
const GridTableRow = styled('div')<{
  setBackground?: LiteralUnion<'striped' | 'inherit', string>;
}>(({ setBackground }) => ({
  display: 'contents',
  backgroundColor: setBackground || 'inherit',
}));

GridTableRow.defaultProps = {
  role: 'row',
};

type GridTableItemType = {
  setStartColumn?: number;
  setStartRow?: number;
  setEndColumn?: number;
  setEndRow?: number;
  setColumn?: number;
  setRow?: number;
  setDirection?: 'vertical' | 'horizontal';
  setPosition?: 'center' | 'flex-start' | 'flex-end';
  resetPadding?: boolean;
  setBackground?: string;
  setMobileColumn?: number;
  setMobileRow?: number;
  setTabletColumn?: number;
  setTabletRow?: number;
};

/**
 * GridTableItem GridTableの子要素としてのみ使用可能なコンポーネント
 */
const GridTableItem = styled('div')<GridTableItemType>(
  ({
    theme,
    resetPadding,
    setBackground,
    setStartColumn,
    setStartRow,
    setEndColumn,
    setEndRow,
    setColumn,
    setRow,
  }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: resetPadding ? theme.spacings.none : theme.spacings.sm,
    outline: theme.borders.default,
    backgroundColor: setBackground || 'inherit',
    overflow: 'hidden',
    lineHeight: theme.lineHeights.default,
    gridColumnStart: setStartColumn,
    gridRowStart: setStartRow,
    gridColumnEnd: setEndColumn,
    gridRowEnd: setEndRow,
    gridColumn: setColumn ? `span ${setColumn}` : undefined,
    gridRow: setRow ? `span ${setRow}` : undefined,
  }),
  ({ setPosition, setDirection = 'horizontal' }) => {
    if (setDirection === 'vertical') {
      return {
        alignItems: setPosition,
        flexDirection: 'column',
      };
    }

    return { justifyContent: setPosition };
  },
  ({ theme, setMobileColumn, setMobileRow, setTabletColumn, setTabletRow }) => {
    return {
      [theme.breakpoints.sm]: {
        gridColumn: `span ${setMobileColumn}`,
        gridRow: `span ${setMobileRow}`,
      },

      [theme.breakpoints.md]: {
        gridColumn: `span ${setTabletColumn}`,
        gridRow: `span ${setTabletRow}`,
      },
    };
  },
);

/**
 * GridTableHeaderItem GridTableの子要素としてのみ使用可能なコンポーネント
 */
export const GridTableHeaderItem = styled(GridTableItem)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.colors.white,
  lineHeight: theme.lineHeights.reset,
}));

const Subgrid = styled('div')<{
  /** 親Gridの何列分の幅か */
  setColumn?: number | string;
  /** 親Gridの何行分の高さか */
  setRow?: number | string;
  setStriped?: boolean;
}>(
  ({ setColumn, setRow }) => ({
    display: 'grid',
    gap: '1px',
    gridTemplateColumns: setColumn ? 'subgrid' : undefined,
    gridColumn: setColumn ? `span ${setColumn}` : undefined,
    gridTemplateRows: setRow ? 'subgrid' : undefined,
    gridRow: setRow ? `span ${setRow}` : undefined,
    backgroundColor: 'inherit',
  }),
  ({ theme, setStriped = true }) =>
    setStriped && {
      // div かつ role="row" の奇数行と偶数行の背景色を変更する
      '&>div[role="row"]:nth-of-type(2n)': {
        backgroundColor: theme.colors.gray._5,
      },
      '&>div[role="row"]:nth-of-type(2n-1)': {
        backgroundColor: theme.colors.white,
      },
    },
);

export default mergeComponents(GridTable, {
  Row: GridTableRow,
  Item: GridTableItem,
  HeaderItem: GridTableHeaderItem,
  Subgrid,
});
