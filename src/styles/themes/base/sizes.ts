import { SizesType } from '@styles/themes/types';
import { rem } from '@styles/utils/unit';

export const sizes = {
  none: 0,

  '4xs': rem(24),
  '3xs': rem(28),
  '2xs': rem(32),
  xs: rem(64),
  sm: rem(128),
  md: rem(192),
  lg: rem(256),
  xl: rem(320),
  '2xl': rem(384),
  '3xl': rem(448),
  '4xl': rem(512),
  '5xl': rem(576),
  '6xl': rem(672),
  '7xl': rem(768),
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  screenWidth: '100vw',
  screenHeight: '100vh',
} as const satisfies SizesType;
