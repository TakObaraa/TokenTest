import Styled from '@emotion/styled';
import mergeComponents from '@utils/hooks/mergeComponents';

// NOTE: 別の色が必要になったら拡張する
type ListTextColorType = 'default' | 'danger';

/** Memo
 * BREAKPOINTでテキストサイズを切り替えると大変なので、Propsで受け取れるようにする
 * 基本的にはコンポーネントの呼び出し先でBREAKPOINTの切り替えを行うがAtoms単位のコンポーネントであればものによってはPropsで渡すのもありかも
 * 要検討
 */
type ItemPropsType = {
  setColor?: ListTextColorType;
  setBold?: boolean;
  isPreWrap?: boolean;
};

type ListPropsType = {
  resetLineHeight?: boolean;
  isEllipsis?: boolean;
};

/** StyledComponent */
const Item = Styled('li')<ItemPropsType>(
  ({ setColor, setBold, theme }) => ({
    color:
      setColor === 'danger' ? theme.colors.danger : theme.colors.font.default,
    fontWeight: setBold ? theme.fontWeights.bold : theme.fontWeights.normal,
    [theme.breakpoints.md]: {
      fontSize: theme.fontSizes.md,
    },
    [theme.breakpoints.xs]: {
      fontSize: theme.fontSizes.sm,
    },
  }),
  ({ isPreWrap }) => isPreWrap && { whiteSpace: 'pre-wrap' },
);

const List = Styled('ul')<ListPropsType>(
  ({ theme }) => ({
    marginBlockStart: theme.spacings.none,
    marginBlockEnd: theme.spacings.none,
    paddingInlineStart: theme.spacings.lg,
    markerOffset: 0,
  }),
  ({ resetLineHeight, theme }) => ({
    lineHeight: !resetLineHeight
      ? theme.lineHeights.default
      : theme.lineHeights.light,
  }),
  ({ isEllipsis }) => ({
    overflow: isEllipsis ? 'hidden' : 'visible',
    textOverflow: isEllipsis ? 'ellipsis' : 'clip',
  }),
  ({ isEllipsis }) => isEllipsis && { whiteSpace: 'nowrap' },
);

export default mergeComponents(List, {
  Item,
});
