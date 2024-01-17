import { RadiusType } from '@styles/themes/types';
import { rem } from '@styles/utils/unit';

export const radius = {
  none: 0,
  base: rem(3),
} as const satisfies RadiusType;
