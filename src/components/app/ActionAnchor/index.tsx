import { Theme } from '@emotion/react';
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type FontSizeOptionType = keyof Theme['fontSizes'];

type Style = {
  setFontSize?: FontSizeOptionType;
  setBold?: boolean;
  resetLineHeight?: boolean;
  isEllipsis?: boolean;
};

/** StyleComponent */
const ActionAnchor = Styled(Link)<Style>(
  () => ({
    display: 'block',
    cursor: 'pointer',
    width: 'fit-content',
    maxWidth: '100%',
    textDecoration: 'none',

    ':hover': {
      textDecoration: 'underline',
    },
  }),
  ({ setFontSize, theme }) => ({
    fontSize:
      setFontSize === undefined
        ? theme.fontSizes.md
        : theme.fontSizes[setFontSize],
  }),
  ({ setBold, theme }) => ({
    fontWeight:
      setBold === true ? theme.fontWeights.bold : theme.fontWeights.normal,
  }),
  ({ resetLineHeight, theme }) => ({
    lineHeight: !resetLineHeight ? theme.lineHeights.default : 1, // TODO: theme.lineHeights.light, 1のやつにする
  }),
  ({ isEllipsis }) =>
    isEllipsis && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
);

export default ActionAnchor;
