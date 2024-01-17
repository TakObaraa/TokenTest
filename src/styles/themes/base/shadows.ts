import { ShadowsType } from '@styles/themes/types';

export const shadows = {
  default: '0 1px 3px rgb(0 0 0 / 10%)',
  popper: '0 6px 12px rgb(0 0 0 / 20%)',
  header: '0 2px 2px rgb(0 0 0 / 20%)',
  modal: '0 5px 15px rgb(0 0 0 / 50%)',
  focus:
    'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6)',
} as const satisfies ShadowsType;
