import { ZIndexType } from '@styles/themes/types';

export const zIndex = {
  drawer: 1000,
  modal: 1100,
  popover: 1200,
} as const satisfies ZIndexType;
