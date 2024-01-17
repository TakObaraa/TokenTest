import { SpacingsType } from '@styles/themes/types';
import { rem } from '@styles/utils/unit';

export const spacings = {
  none: 0,

  '2xs': rem(2),
  xs: rem(4),
  sm: rem(8),
  md: rem(16),
  lg: rem(24),
  xl: rem(32),

  auto: 'auto',
} as const satisfies SpacingsType;
