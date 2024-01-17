import { colors } from '@styles/themes/base/colors';
import { BordersType } from '@styles/themes/types';

export const borders = {
  none: 'none',

  default: `1px solid ${colors.gray._300}`,
  separate: `1px solid ${colors.gray._100}`,

  primary: `1px solid ${colors.primary}`,
  secondary: `1px solid ${colors.gray._200}`,
  success: `1px solid ${colors.success}`,
  danger: `1px solid ${colors.danger}`,
  error: `1px solid ${colors.error}`,
  warning: `1px solid ${colors.warning}`,
} as const satisfies BordersType;
