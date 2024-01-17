import {
  FontSizesType,
  FontWeightsType,
  FontsType,
  LineHeightsType,
} from '@styles/themes/types';
import { rem } from '@styles/utils/unit';

export const fonts = {
  default: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Hiragino Kaku Gothic ProN"',
    '"Hiragino Sans"',
    'sans-serif',
  ].join(','),

  serif: [
    'ui-serif',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(','),

  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ].join(','),
} as const satisfies FontsType;

export const fontSizes = {
  xs: rem(10),
  sm: rem(12),
  md: rem(14),
  lg: rem(16),
  xl: rem(18),
  '2xl': rem(20),
  '3xl': rem(24),
} as const satisfies FontSizesType;

export const fontWeights = {
  normal: 400,
  bold: 700,
} as const satisfies FontWeightsType;

export const lineHeights = {
  default: 1.428571429,
  light: 1.2,
  reset: 1,
} as const satisfies LineHeightsType;
