export type BordersType = {
  /** base: none */
  none: string;
  /** base: 1px solid ${colors.gray._300} */
  default: string;
  /** base: 1px solid ${colors.gray._100} */
  separate: string;
  /** base: 1px solid ${colors.primary} */
  primary: string;
  /** base: 1px solid ${colors.gray._200} */
  secondary: string;
  /** base: 1px solid ${colors.success} */
  success: string;
  /** base: 1px solid ${colors.danger} */
  danger: string;
  /** base: 1px solid ${colors.error} */
  error: string;
  /** base: 1px solid ${colors.warning} */
  warning: string;
};

export type BreakpointsType = {
  /** base: "@media(max-width: 360px)" */
  xs: string;
  /** base: "@media(0 <= width < 600px)" */
  sm: string;
  /** base: "@media(600px <= width < 880px)" */
  md: string;
  /** base: "@media(880px <= width)" */
  lg: string;
};

export type ColorsType = {
  gray: {
    _900: string;
    _800: string;
    _700: string;
    _600: string;
    _500: string;
    _400: string;
    _300: string;
    _200: string;
    _100: string;
    _50: string;
    _10: string;
    _5: string;
  };

  primary: {
    /** base: blue._800 */
    dark: string;
    /** base: blue._600 */
    main: string;
    /** base: blue._400 */
    light: string;
  };

  secondary: {
    /** base: gray._600 */
    dark: string;
    /** base: gray._200 */
    main: string;
    /** base: gray._100 */
    light: string;
  };

  sky: {
    /** base: sky._700 */
    dark: string;
    /** base: sky._500 */
    main: string;
    /** base: sky._200 */
    light: string;
  };

  red: {
    /** base: red._800 */
    dark: string;
    /** base: red._600 */
    main: string;
    /** base: red._200 */
    light: string;
  };

  orange: {
    /** base: orange._800 */
    dark: string;
    /** base: orange._500 */
    main: string;
    /** base: orange._300 */
    light: string;
  };

  green: {
    /** base: green._900 */
    dark: string;
    /** base: green._700 */
    main: string;
    /** base: green._300 */
    light: string;
  };

  /** base: #000  */
  black: string;
  /** base: #fff */
  white: string;

  font: {
    /** base: gray._900 */
    default: string;
    /** base: gray._700 */
    sub: string;
    /** base: gray._500 */
    weak: string;
    /** base: white */
    accent: string;
    /** base: primary.main */
    link: string;
  };

  background: {
    /** base: white */
    surface: string;
    /** base: gray._10 */
    surfaceRaised: string;
    /** base: gray._100 */
    surfaceLowered: string;
    /** base: gray._50 */
    disabled: string;
  };

  /** base: green.main */
  success: string;
  /** base: red.main */
  danger: string;
  /** base: red.light */
  error: string;
  /** base: orange.main */
  warning: string;

  /** base: 'currentColor' */
  current: string;
  /** base: 'rgb(0 0 0 / 0)' */
  transparent: string;
};

export type RadiusType = {
  /** base: 0 */
  none: number;
  /** base: 3px */
  base: string;
};

export type ShadowsType = {
  default: string;
  popper: string;
  header: string;
  modal: string;
  focus: string;
};

export type SizesType = {
  /** 0 */
  none: number;

  /** base: 24px */
  '4xs': string;
  /** base: 28px */
  '3xs': string;
  /** base: 32px */
  '2xs': string;
  /** base: 64px */
  xs: string;
  /** base: 128px */
  sm: string;
  /** base: 192px */
  md: string;
  /** base: 256px */
  lg: string;
  /** base: 320px */
  xl: string;
  /** base: 384px */
  '2xl': string;
  /** base: 448px */
  '3xl': string;
  /** base: 512px */
  '4xl': string;
  /** base: 576px */
  '5xl': string;
  /** base: 672px */
  '6xl': string;
  /** base: 768px */
  '7xl': string;

  /** base: '100%' */
  full: string;
  /** base: 'min-content' */
  min: string;
  /** base: 'max-content' */
  max: string;
  /** base: 'fit-content' */
  fit: string;
  /** base: '100vw' */
  screenWidth: string;
  /** base: '100vh' */
  screenHeight: string;
};

export type SpacingsType = {
  none: number;

  /** base: 2px */
  '2xs': string;
  /** base: 4px */
  xs: string;
  /** base: 8px */
  sm: string;
  /** base: 16px */
  md: string;
  /** base: 24px */
  lg: string;
  /** base: 32px */
  xl: string;

  auto: string;
};

export type FontsType = {
  default: string;
  serif: string;
  mono: string;
};

export type FontSizesType = {
  /** base: 10px */
  xs: string;
  /** base: 12px */
  sm: string;
  /** base: 14px */
  md: string;
  /** base: 16px */
  lg: string;
  /** base: 18px */
  xl: string;
  /** base: 20px */
  '2xl': string;
  /** base: 24px */
  '3xl': string;
};

export type FontWeightsType = {
  /** base: 400 */
  normal: number;
  /** base: 700 */
  bold: number;
};

export type LineHeightsType = {
  /** base: 1.428571429 */
  default: number;
  /** base: 1.2 */
  light: number;
  /** base: 1 */
  reset: number;
};

export type ZIndexType = {
  /** base: 1000 */
  drawer: number;
  /** base: 1100 */
  modal: number;
  /** base: 1200 */
  popover: number;
};

declare module '@emotion/react' {
  interface Theme {
    borders: BordersType;
    breakpoints: BreakpointsType;
    colors: ColorsType;
    radius: RadiusType;
    shadows: ShadowsType;
    sizes: SizesType;
    spacings: SpacingsType;
    fonts: FontsType;
    fontSizes: FontSizesType;
    fontWeights: FontWeightsType;
    lineHeights: LineHeightsType;
    zIndex: ZIndexType;
  }
}
