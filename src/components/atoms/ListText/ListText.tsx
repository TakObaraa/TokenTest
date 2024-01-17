import Styled from '@emotion/styled';
import { BREAKPOINT, COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

// NOTE: 別の色が必要になったら拡張する
export type ListTextColorType = 'default' | 'danger';

export type FontSizeOptionType = keyof typeof SIZE.FONT;
/** Memo
 * BREAKPOINTでテキストサイズを切り替えると大変なので、Propsで受け取れるようにする
 * 基本的にはコンポーネントの呼び出し先でBREAKPOINTの切り替えを行うがAtoms単位のコンポーネントであればものによってはPropsで渡すのもありかも
 * 要検討
 */
interface Style {
  setTabletFontSize?: FontSizeOptionType;
  setMobileFontSize?: FontSizeOptionType;
  setColor?: ListTextColorType;
  setBold?: boolean;
  isPreWrap?: boolean;
}

interface Content {
  onClick?: () => void;
  children: React.ReactNode;
}

export type ListTextProps = Style &
  Content &
  Pick<HTMLAttributes<HTMLParagraphElement>, 'className'>;

const ColorMap: Record<ListTextColorType, string> = {
  default: COLOR.FONT.DEFAULT,
  danger: COLOR.FONT.DANGER,
};

/** StyledComponent */
const Wrapper = Styled('li')<Style>(
  ({ setColor, setBold }) => ({
    color: setColor === undefined ? undefined : ColorMap[setColor],
    fontSize: 'inherit',
    fontWeight: setBold ? 'bold' : 'normal',
    lineHeight: 'inherit',
    overflow: 'inherit',
    textOverflow: 'inherit',
    whiteSpace: 'inherit',
  }),
  ({ setTabletFontSize }) =>
    setTabletFontSize && {
      [BREAKPOINT.TABLET]: {
        fontSize: SIZE.FONT[setTabletFontSize],
      },
    },
  ({ setMobileFontSize }) =>
    setMobileFontSize && {
      [BREAKPOINT.MOBILE]: {
        fontSize: SIZE.FONT[setMobileFontSize],
      },
    },
  ({ isPreWrap }) => isPreWrap && { whiteSpace: 'pre-wrap' },
);

/** ReactComponent */
const ListText: React.FC<ListTextProps> = ({
  className,
  setTabletFontSize,
  setMobileFontSize,
  setColor,
  setBold,
  isPreWrap,
  children,
  onClick,
}) => (
  <Wrapper
    className={className}
    setColor={setColor}
    setTabletFontSize={setTabletFontSize}
    setMobileFontSize={setMobileFontSize}
    setBold={setBold}
    isPreWrap={isPreWrap}
    onClick={onClick}
  >
    {children}
  </Wrapper>
);

ListText.defaultProps = {
  setTabletFontSize: undefined,
  setMobileFontSize: undefined,
  setColor: undefined,
  setBold: false,
  isPreWrap: false,
  onClick: undefined,
};

export default ListText;
