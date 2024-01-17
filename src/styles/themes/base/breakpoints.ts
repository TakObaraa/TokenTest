import { BreakpointsType } from '@styles/themes/types';

export const breakpoints = {
  xs: '@media(max-width: 360px)',
  sm: '@media(0 <= width < 600px)',
  md: '@media(600px <= width < 880px)',
  lg: '@media(880px <= width)',
} as const satisfies BreakpointsType;
