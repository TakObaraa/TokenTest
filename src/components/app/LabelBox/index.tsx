import Styled from '@emotion/styled';

export type setLabelColorType =
  | 'primary'
  | 'warning'
  | 'finish'
  | 'success'
  | 'info'
  | 'danger';
export type setLabelSizeType = 'small' | 'default';

type Style = {
  setLabelColor?: setLabelColorType;
  setSize?: setLabelSizeType;
};

/** StyleComponent */
const LabelBox = Styled('p')<Style>(
  ({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    height: 'fit-content',
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.lineHeights.default,
    padding: `${theme.spacings.xs} ${theme.spacings.sm}`,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    borderRadius: theme.radius.base,
  }),
  ({ setLabelColor = 'primary', theme }) =>
    setLabelColor === 'primary' && {
      color: theme.colors.font.accent,
      backgroundColor: theme.colors.primary.main,
    },
  ({ setLabelColor, theme }) =>
    setLabelColor === 'warning' && {
      color: theme.colors.font.accent,
      backgroundColor: theme.colors.warning,
    },
  ({ setLabelColor, theme }) =>
    setLabelColor === 'finish' && {
      color: theme.colors.font.accent,
      backgroundColor: theme.colors.gray._700,
    },
  ({ setLabelColor, theme }) =>
    setLabelColor === 'success' && {
      color: theme.colors.font.accent,
      backgroundColor: theme.colors.success,
    },
  ({ setLabelColor, theme }) =>
    setLabelColor === 'info' && {
      color: theme.colors.font.accent,
      backgroundColor: theme.colors.sky.main,
    },
  ({ setLabelColor, theme }) =>
    setLabelColor === 'danger' && {
      color: theme.colors.font.accent,
      backgroundColor: theme.colors.danger,
    },
  ({ setSize = 'default', theme }) =>
    setSize === 'small' && {
      padding: `${theme.spacings['2xs']} ${theme.spacings.sm}`,
    },
);

export default LabelBox;
