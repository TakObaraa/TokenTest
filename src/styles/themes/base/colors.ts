import { ColorsType } from '@styles/themes/types';

const palette = {
  gray: {
    _900: '#333333',
    _800: '#4d4d4d',
    _700: '#666666',
    _600: '#808080',
    _500: '#999999',
    _400: '#b3b3b3',
    _300: '#cccccc',
    _200: '#d9d9d9',
    _100: '#e6e6e6',
    _50: '#f2f2f2',
    _10: '#f5f5f5',
    _5: '#f9f9f9',
  },
  red: {
    _900: '#8b211e',
    _800: '#b42b27',
    _700: '#d43e3a',
    _600: '#d9534f',
    _500: '#de6764',
    _400: '#e7908e',
    _300: '#f0b9b8',
    _200: '#f4cecd',
    _100: '#f9e2e2',
  },
  green: {
    _900: '#2d672d',
    _800: '#3d8b3d',
    _700: '#4cae4c',
    _600: '#5cb85c',
    _500: '#6ec06e',
    _400: '#91cf91',
    _300: '#b5dfb5',
    _200: '#d8eed8',
    _100: '#eaf6ea',
  },
  blue: {
    _900: '#173853',
    _800: '#22527b',
    _700: '#2d6da3',
    _600: '#337ab7',
    _500: '#3b87c8',
    _400: '#63a0d4',
    _300: '#8bb8df',
    _200: '#b3d0ea',
    _100: '#dbe9f5',
  },
  sky: {
    _900: '#175b70',
    _800: '#1f7e9a',
    _700: '#28a1c5',
    _600: '#46b8da',
    _500: '#5bc0de',
    _400: '#70c8e2',
    _300: '#9bd8eb',
    _200: '#d8f4fc',
    _100: '#f0f9fc',
  },
  orange: {
    _900: '#81500b',
    _800: '#b06d0f',
    _700: '#df8a13',
    _600: '#eea236',
    _500: '#f0ad4e',
    _400: '#f2b865',
    _300: '#f6ce95',
    _200: '#fae3c4',
    _100: '#fceedb',
  },
} as const;

const schema = {
  gray: palette.gray,

  primary: {
    dark: palette.blue._800,
    main: palette.blue._600,
    light: palette.blue._400,
  },

  secondary: {
    dark: palette.gray._600,
    main: palette.gray._200,
    light: palette.gray._100,
  },

  sky: {
    dark: palette.sky._700,
    main: palette.sky._500,
    light: palette.sky._200,
  },

  red: {
    dark: palette.red._800,
    main: palette.red._600,
    light: palette.red._200,
  },

  orange: {
    dark: palette.orange._700,
    main: palette.orange._500,
    light: palette.orange._300,
  },

  green: {
    dark: palette.green._800,
    main: palette.green._700,
    light: palette.green._300,
  },

  /*
    背景色+文字色などの組み合わせで視認性（みやすさ）を考慮した結果
    色の変更が発生する可能性あり（特にlight）
  */

  black: '#000',
  white: '#fff',
};

export const colors = {
  ...schema,
  font: {
    default: schema.gray._900,
    sub: schema.gray._700,
    weak: schema.gray._500,
    accent: schema.white,
    link: schema.primary.main,
  },

  background: {
    surface: schema.white,
    surfaceRaised: schema.gray._10,
    surfaceLowered: schema.gray._100,
    disabled: schema.gray._50,
  },

  success: schema.green.main,
  danger: schema.red.main,
  error: schema.red.light,
  warning: schema.orange.main,

  current: 'currentColor',
  transparent: 'rgb(0 0 0 / 0)',
} as const satisfies ColorsType;
