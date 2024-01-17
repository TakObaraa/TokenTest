/**
 * NOTE: コンポーネントに直接指定可能なスタイルを定義した型
 */
/**
 * @deprecated theme を使ってください
 */
export type AllowCSSProperties = Pick<
  React.CSSProperties,
  | 'border'
  | 'borderTop'
  | 'borderLeft'
  | 'borderRight'
  | 'borderBottom'
  | 'margin'
  | 'marginTop'
  | 'marginLeft'
  | 'marginRight'
  | 'marginBottom'
  | 'padding'
  | 'paddingTop'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingBottom'
>;
/**
 * @deprecated theme を使ってください
 */
export type Style = { style?: AllowCSSProperties };
/**
 * @deprecated theme を使ってください
 */
export const makeStyle = (props: AllowCSSProperties) => props;

const ColorPalette = {
  GRAY: {
    _1000: '#000000',
    _900: '#333333',
    _800: '#4d4d4d',
    _700: '#666666', // Base
    _600: '#808080',
    _500: '#999999',
    _400: '#b3b3b3',
    _300: '#cccccc',
    _200: '#d9d9d9',
    _100: '#e6e6e6',
    _50: '#f2f2f2',
    _10: '#f5f5f5',
    _5: '#f9f9f9',
    _0: '#ffffff',
  },
  RED: {
    _900: '#8b211e',
    _800: '#b42b27',
    _700: '#d43e3a',
    _600: '#d9534f', // Base
    _500: '#de6764',
    _400: '#e7908e',
    _300: '#f0b9b8',
    _200: '#f4cecd',
    _100: '#f9e2e2',
  },
  GREEN: {
    _900: '#2d672d',
    _800: '#3d8b3d',
    _700: '#4cae4c',
    _600: '#5cb85c', // Base
    _500: '#6ec06e',
    _400: '#91cf91',
    _300: '#b5dfb5',
    _200: '#d8eed8',
    _100: '#eaf6ea',
  },
  BLUE: {
    _900: '#173853',
    _800: '#22527b',
    _700: '#2d6da3',
    _600: '#337ab7', // Base
    _500: '#3b87c8',
    _400: '#63a0d4',
    _300: '#8bb8df',
    _200: '#b3d0ea',
    _100: '#dbe9f5',
  },
  SKY: {
    _900: '#175b70',
    _800: '#1f7e9a',
    _700: '#28a1c5',
    _600: '#46b8da',
    _500: '#5bc0de', // Base
    _400: '#70c8e2',
    _300: '#9bd8eb',
    _200: '#d8f4fc',
    _100: '#f0f9fc',
  },
  YELLOW: {
    _900: '#998405',
    _800: '#cbaf06',
    _700: '#f7d60d',
    _600: '#f8da25',
    _500: '#fae257',
    _400: '#fbeb88',
    _300: '#fcefa1', // Base
    _200: '#fdf3ba',
    _100: '#fef7d2',
  },
  ORANGE: {
    _900: '#81500b',
    _800: '#b06d0f',
    _700: '#df8a13',
    _600: '#eea236',
    _500: '#f0ad4e', // Base
    _400: '#f2b865',
    _300: '#f6ce95',
    _200: '#fae3c4',
    _100: '#fceedb',
  },
  VIOLET: {
    _900: '#5c2353',
    _800: '#813174',
    _700: '#a63f95',
    _600: '#b846a6', // Base
    _500: '#bf58af',
    _400: '#ce7dc1',
    _300: '#dca2d2',
    _200: '#eac7e4',
    _100: '#f8ecf6',
  },
  IOS: '#f2f2f7',
} as const;

// 定数定義
/**
 * @deprecated theme を使ってください
 */
export const SIZE = {
  FONT: {
    _48: '48px',
    _32: '32px',
    _24: '24px',
    _20: '20px',
    _18: '18px',
    _16: '16px',
    _14: '14px', // BASE
    _12: '12px',
    _10: '10px',
  },

  PADDING: {
    _40: '40px',
    _32: '32px',
    _24: '24px',
    _20: '20px',
    _16: '16px',
    _12: '12px',
    _10: '10px',
    _8: '8px', // BASE
    _4: '4px',
    _2: '2px',
    _1: '1px',
    _0: '0px',
  },

  MARGIN: {
    _48: '48px',
    _40: '40px',
    _32: '32px',
    _24: '24px',
    _20: '20px',
    _16: '16px',
    _14: '14px',
    _12: '12px',
    _8: '8px', // BASE
    _4: '4px',
    _2: '2px',
    _1: '1px',
    _0: '0px',
    AUTO: 'auto',
  },

  GAP: {
    _32: '32px',
    _24: '24px',
    _20: '20px',
    _16: '16px',
    _12: '12px',
    _10: '10px',
    _8: '8px', // BASE
    _4: '4px',
    _2: '2px',
    _1: '1px',
    _0: '0px',
  },

  BORDER: {
    _12: '12px',
    _8: '8px',
    _4: '4px',
    _2: '2px',
    _1: '1px', // BASE
    _0: '0px',
  },

  LINEHEIGHT: {
    DEFAULT: '1.428571429', // 20px想定
    HIGH: '1.7142871428', // 24px想定
    RESET: '1',
    ZERO: '0',
  },

  RADIUS: {
    DEFAULT: '3px',
    ZERO: '0px',
  },
} as const;

/**
 * 色の命名について(仮)
 * 役割を現す名前と色自身の名前の2つのパターンで命名する
 * 役割を現す名前は’success, danger’などシステム全体で統一された役割をもつ概念や’placeholder’などの共通した基本的な要素の名前をつける
 * 色の名前は指定したカラーコードに近しい名前をつける（要検討）カラーパレットのナンバーの方がいいかも
 * 2つの命名パターンでそれぞれ同じカラーパレットを指定するのはOK
 * 色の名前はFONT、BACKGROUNDなどで命名とカラーパレットの指定は統一する
 * カラーパレット自体に色の名前を付けず数値でしているのは、色毎に色相環などがバラバラにならないようにするためと、カラーパレットが無限に増えるのを避けるため
 * 色の名前決める時に使うやつ
 * https://www.color-sample.com/
 * https://encycolorpedia.jp/
 */
/**
 * @deprecated theme を使ってください
 */
export const COLOR = {
  FONT: {
    // GRAY系
    DEFAULT: ColorPalette.GRAY._900,
    INPUT: ColorPalette.GRAY._700,
    DISABLED: ColorPalette.GRAY._500,
    PLACEHOLDER: ColorPalette.GRAY._500,

    GRAY_1000: ColorPalette.GRAY._1000,
    GRAY_700: ColorPalette.GRAY._700,
    GRAY_600: ColorPalette.GRAY._600,
    GRAY_500: ColorPalette.GRAY._500,
    GRAY_400: ColorPalette.GRAY._400,
    GRAY_0: ColorPalette.GRAY._0,

    // RED系
    DANGER: ColorPalette.RED._600,

    RED_900: ColorPalette.RED._900,
    RED_600: ColorPalette.RED._600,

    // GREEN系
    SUCCESS: ColorPalette.GREEN._700,

    GREEN_600: ColorPalette.GREEN._600,

    // BLUE系
    LINK_HOVER: ColorPalette.BLUE._800,
    LINK: ColorPalette.BLUE._600,

    BLUE_800: ColorPalette.BLUE._800,

    // SKY系
    SKY_500: ColorPalette.SKY._500,

    // ORANGE系
    WARNING: ColorPalette.ORANGE._500,

    ORANGE_500: ColorPalette.ORANGE._500,
  },

  BACKGROUND: {
    // GRAY系
    DISABLED: ColorPalette.GRAY._50,
    GRID: ColorPalette.GRAY._300,

    GRAY_1000: ColorPalette.GRAY._1000,
    GRAY_900: ColorPalette.GRAY._900,
    GRAY_700: ColorPalette.GRAY._700,
    GRAY_600: ColorPalette.GRAY._600,
    GRAY_500: ColorPalette.GRAY._500,
    GRAY_400: ColorPalette.GRAY._400,
    GRAY_300: ColorPalette.GRAY._300,
    GRAY_200: ColorPalette.GRAY._200,
    GRAY_100: ColorPalette.GRAY._100,
    GRAY_50: ColorPalette.GRAY._50,
    GRAY_10: ColorPalette.GRAY._10,
    GRAY_5: ColorPalette.GRAY._5,
    GRAY_0: ColorPalette.GRAY._0,

    // RED系
    DANGER: ColorPalette.RED._600,

    RED_700: ColorPalette.RED._700,
    RED_600: ColorPalette.RED._600,
    RED_300: ColorPalette.RED._300,
    RED_200: ColorPalette.RED._200,
    RED_100: ColorPalette.RED._100,

    // GREEN系
    SUCCESS: ColorPalette.GREEN._700,

    GREEN_900: ColorPalette.GREEN._900,
    GREEN_800: ColorPalette.GREEN._800,
    GREEN_700: ColorPalette.GREEN._700,
    GREEN_600: ColorPalette.GREEN._600,
    GREEN_400: ColorPalette.GREEN._400,
    GREEN_200: ColorPalette.GREEN._200,

    // BLUE系
    BLUE_900: ColorPalette.BLUE._900,
    BLUE_800: ColorPalette.BLUE._800,
    BLUE_700: ColorPalette.BLUE._700,
    BLUE_600: ColorPalette.BLUE._600,
    BLUE_400: ColorPalette.BLUE._400,
    BLUE_200: ColorPalette.BLUE._200,

    // SKY系
    SKY_600: ColorPalette.SKY._600,
    SKY_500: ColorPalette.SKY._500,
    SKY_200: ColorPalette.SKY._200,
    SKY_100: ColorPalette.SKY._100,

    // YELLOW系
    YELLOW_700: ColorPalette.YELLOW._700,
    YELLOW_500: ColorPalette.YELLOW._500,
    YELLOW_200: ColorPalette.YELLOW._200,
    YELLOW_100: ColorPalette.YELLOW._100,

    // ORANGE系
    WARNING: ColorPalette.ORANGE._500,

    ORANGE_600: ColorPalette.ORANGE._600,
    ORANGE_500: ColorPalette.ORANGE._500,
    ORANGE_400: ColorPalette.ORANGE._400,

    // VIOLET系
    VIOLET_800: ColorPalette.VIOLET._800,
    VIOLET_500: ColorPalette.VIOLET._500,

    // システム
    SYSTEM: ColorPalette.IOS,
  },

  BORDER: {
    // GRAY系
    INPUT_HOVER: ColorPalette.GRAY._400,
    DEFAULT: ColorPalette.GRAY._300,

    GRAY_1000: ColorPalette.GRAY._1000,
    GRAY_600: ColorPalette.GRAY._600,
    GRAY_400: ColorPalette.GRAY._400,
    GRAY_200: ColorPalette.GRAY._200,
    GRAY_100: ColorPalette.GRAY._100,
    GRAY_0: ColorPalette.GRAY._0,

    // RED系
    DANGER: ColorPalette.RED._600,

    RED_800: ColorPalette.RED._800,
    RED_300: ColorPalette.RED._300, // Memo Alertの部分なのでボーダーのDangerにするかも

    // GREEN系
    GREEN_700: ColorPalette.GREEN._700,
    GREEN_300: ColorPalette.GREEN._300, // Memo Alertの部分なのでボーダーのSuccessにするかも

    // BLUE系
    INPUT_FOCUS: ColorPalette.BLUE._400,

    BLUE_800: ColorPalette.BLUE._800,
    BLUE_700: ColorPalette.BLUE._700,
    BLUE_600: ColorPalette.BLUE._600,

    // SKY系
    SKY_700: ColorPalette.SKY._700,
    SKY_400: ColorPalette.SKY._400,
    SKY_300: ColorPalette.SKY._300,

    // YELLOW系
    YELLOW_300: ColorPalette.YELLOW._300,

    // ORANGE系
    ORANGE_700: ColorPalette.ORANGE._700,
    ORANGE_600: ColorPalette.ORANGE._600,
    ORANGE_400: ColorPalette.ORANGE._400,

    // Header 仮色 例外的な部分なのでここでまとめておく
    HEADER_DASHBOARD: ColorPalette.GREEN._600,
    HEADER_PATIENT: ColorPalette.ORANGE._500,
    HEADER_COMMUNICATION: ColorPalette.BLUE._700,
    HEADER_BUSINESS: ColorPalette.RED._600,
  },

  ICON: {
    DEFAULT: ColorPalette.GRAY._900,
    GRAY: ColorPalette.GRAY._700,
    LIGHT_GRAY: ColorPalette.GRAY._400,
    WHITE: ColorPalette.GRAY._0,
    DARK_RED: ColorPalette.RED._900,
    RED: ColorPalette.RED._700,
    BLUE: ColorPalette.BLUE._600,
    SKY: ColorPalette.SKY._600,
    GREEN: ColorPalette.GREEN._800,
    ORANGE: ColorPalette.ORANGE._500,
  },

  SCHEDULE: {
    GRAY: ColorPalette.GRAY._600,
    RED: ColorPalette.RED._600,
    BLUE: ColorPalette.BLUE._600,
    YELLOW: ColorPalette.ORANGE._500,
    GREEN: ColorPalette.GREEN._600,
  },
} as const;

/**
 * @deprecated theme を使ってください
 */
export const BOXSHADOW = {
  BASE: '0 1px 3px rgb(0 0 0 / 10%)',
  MIDDLE: '0 2px 2px rgb(0 0 0 / 20%)',
  HIGHER: '0 6px 12px rgb(0 0 0 / 20%)',
  FOCUS:
    'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6)',
} as const;

/* BREAKPOINT
  width:880px以下はタブレット用レイアウト
  width:599px以下はスマホ用レイアウト
*/
/**
 * @deprecated theme を使ってください
 */
export const BREAKPOINT = {
  TABLET: '@media(max-width: 880px)',
  MOBILE: '@media(max-width: 599px)',
} as const;

/* CONTENT_SIZE
  コンテンツサイズ上限 2000px
  最低保証サイズ 360px
*/
/**
 * @deprecated theme を使ってください
 */
export const CONTENT_SIZE = {
  MAX: '2000px',
  MIDDLE: '1160px',
  MIN: '360px',
  TABLET: '880px',
  MOBILE: '599px',
} as const;

/* バイタルグラフ用カラーセット
  bp:血圧
  t:体温
  p:脈拍
  rr: 呼吸数
  sp: spo2
  bs: 血糖値
*/
/**
 * @deprecated theme を使ってください
 */
export const VitalGraphColor = {
  bp: ColorPalette.BLUE._400,
  t: ColorPalette.GREEN._600,
  p: ColorPalette.ORANGE._500,
  rr: ColorPalette.GRAY._500,
  sp: ColorPalette.YELLOW._700,
  bs: ColorPalette.VIOLET._500,
} as const;

// StoryBook上で表示する用なのでコンポーネントには使用しない事
/**
 * @deprecated theme を使ってください
 */
export const StoriesColors = {
  GRAY: {
    _1000: '#000000',
    _900: '#333333',
    _800: '#4d4d4d',
    _700: '#666666', // Base
    _600: '#808080',
    _500: '#999999',
    _400: '#b3b3b3',
    _300: '#cccccc',
    _200: '#d9d9d9',
    _100: '#e6e6e6',
    _50: '#f2f2f2',
    _10: '#f5f5f5',
    _5: '#f9f9f9',
    _0: '#ffffff',
  },
  Blue: {
    _900: '#173853',
    _800: '#22527b',
    _700: '#2d6da3',
    _600: '#337ab7', // Base
    _500: '#3b87c8',
    _400: '#63a0d4',
    _300: '#8bb8df',
    _200: '#b3d0ea',
    _100: '#dbe9f5',
  },
  Sky: {
    _900: '#175b70',
    _800: '#1f7e9a',
    _700: '#28a1c5',
    _600: '#46b8da',
    _500: '#5bc0de', // Base
    _400: '#70c8e2',
    _300: '#9bd8eb',
    _200: '#d8f4fc',
    _100: '#f0f9fc',
  },
  Red: {
    _900: '#8b211e',
    _800: '#b42b27',
    _700: '#d43e3a',
    _600: '#d9534f', // Base
    _500: '#de6764',
    _400: '#e7908e',
    _300: '#f0b9b8',
    _200: '#f4cecd',
    _100: '#f9e2e2',
  },
  Violet: {
    _900: '#5c2353',
    _800: '#813174',
    _700: '#a63f95',
    _600: '#b846a6', // Base
    _500: '#bf58af',
    _400: '#ce7dc1',
    _300: '#dca2d2',
    _200: '#eac7e4',
    _100: '#f8ecf6',
  },
  Yellow: {
    _900: '#998405',
    _800: '#cbaf06',
    _700: '#f7d60d',
    _600: '#f8da25',
    _500: '#fae257',
    _400: '#fbeb88',
    _300: '#fcefa1', // Base
    _200: '#fdf3ba',
    _100: '#fef7d2',
  },
  Orange: {
    _900: '#81500b',
    _800: '#b06d0f',
    _700: '#df8a13',
    _600: '#eea236',
    _500: '#f0ad4e', // Base
    _400: '#f2b865',
    _300: '#f6ce95',
    _200: '#fae3c4',
    _100: '#fceedb',
  },
  Green: {
    _900: '#2d672d',
    _800: '#3d8b3d',
    _700: '#4cae4c',
    _600: '#5cb85c', // Base
    _500: '#6ec06e',
    _400: '#91cf91',
    _300: '#b5dfb5',
    _200: '#d8eed8',
    _100: '#eaf6ea',
  },
};

/* Memo
Pro: 337ab7
Com:
Fam: 2ba664

header
  .nav_home #8BC34A
  .nav_userList #FFC107
  .nav_staff_schedule #42ab53
  .nav_message #3F51B5
  .nav_board #FF5722
  .nav_forum #03A9F4
  .nav_conference#18862f
  .nav_checkup #cc66ff
  .nav_ledger #e42424
  .nav_family #f99338
  .nav_receiver #8BC34A
*/
