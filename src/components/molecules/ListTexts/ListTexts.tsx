import ListText, { ListTextProps } from '@atoms/ListText/ListText';
import Styled from '@emotion/styled';
import { SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';

export type FontSizeOptionType = keyof typeof SIZE.FONT;

type Style = {
  setFontSize?: FontSizeOptionType;
  resetLineHeight?: boolean;
  isEllipsis?: boolean;
};

type TextProps = {
  text: string | React.ReactNode;
} & Omit<ListTextProps, 'children'>;

type Content = {
  texts: TextProps[];
};

type ListTextsProps = Style &
  Content &
  Pick<HTMLAttributes<HTMLUListElement>, 'className'>;

/** ラッパーを定義する */
const Wrapper = Styled('ul')<Style>(
  {
    marginBlockStart: SIZE.MARGIN._0,
    marginBlockEnd: SIZE.MARGIN._0,
    paddingInlineStart: SIZE.PADDING._24,
    markerOffset: 0,
  },
  ({ setFontSize, resetLineHeight }) => ({
    fontSize: setFontSize === undefined ? 'inherit' : SIZE.FONT[setFontSize],
    lineHeight: !resetLineHeight ? SIZE.LINEHEIGHT.HIGH : SIZE.LINEHEIGHT.RESET,
  }),
  ({ isEllipsis }) => ({
    overflow: isEllipsis ? 'hidden' : 'visible',
    textOverflow: isEllipsis ? 'ellipsis' : 'clip',
  }),
  ({ isEllipsis }) => isEllipsis && { whiteSpace: 'nowrap' },
);

const ListTexts: React.FC<ListTextsProps> = ({
  className,
  setFontSize,
  resetLineHeight,
  isEllipsis,
  texts,
}) => (
  <Wrapper
    className={className}
    setFontSize={setFontSize}
    resetLineHeight={resetLineHeight}
    isEllipsis={isEllipsis}
  >
    {texts.map((item, index) => (
      <ListText
        key={`key-${index.toString()}`}
        className={item.className}
        isPreWrap={item.isPreWrap}
        setBold={item.setBold}
        setColor={item.setColor}
        setMobileFontSize={item.setMobileFontSize}
        setTabletFontSize={item.setTabletFontSize}
        onClick={item.onClick}
      >
        {item.text}
      </ListText>
    ))}
  </Wrapper>
);

ListTexts.defaultProps = {
  setFontSize: '_14',
  resetLineHeight: false,
  isEllipsis: false,
};

export default ListTexts;
