import { CSSObject, Theme } from '@libraries/emotion';
import { Paths } from '@libraries/type-fest';

type StyleFactory = (props: { theme: Theme }) => CSSObject;
type Pattern<T> = (props: T) => StyleFactory;

/** keyof Theme['sizes'] */
type Sizes = keyof Theme['sizes'];
/** keyof Theme['spacings'] */
type Spacings = keyof Theme['spacings'];
type SpacingsXY = [Spacings, Spacings];
type SpacingsAll = [Spacings, Spacings, Spacings, Spacings];
/** keyof Theme['borders'] */
type Borders = keyof Theme['borders'];
/** keyof Theme['colors']['background'] */
type BackgroundColors = Paths<Theme['colors']['background']>;

type Align = 'center' | 'flex-start' | 'flex-end' | 'space-between';
type Justify = Align;

class Patterns {
  constructor() {
    throw new Error('This class cannot be instantiated');
  }

  private static spacing = (
    spacings: Spacings | SpacingsXY | SpacingsAll | undefined,
    theme: Theme,
  ) => {
    if (!spacings) {
      return undefined;
    }

    // padding type is Spacings
    if (typeof spacings === 'string') {
      return theme.spacings[spacings];
    }

    // padding type is SpacingsXY
    if (Array.isArray(spacings) && spacings.length === 2) {
      return `${theme.spacings[spacings[0]]} ${theme.spacings[spacings[1]]}`;
    }

    // padding type is SpacingsAll
    return `${theme.spacings[spacings[0]]} ${theme.spacings[spacings[1]]} ${
      theme.spacings[spacings[2]]
    } ${theme.spacings[spacings[3]]}`;
  };

  /**
   * 最大幅のコンテナを作成し、コンテンツを中央に配置するために使用されます。
   * スクロールコンテナとしても利用可能です。
   * @property scroll - コンテナのスクロール可否
   * @property padding - コンテナの内側の余白
   * @property margin - コンテナの外側の余白
   * @property maxWidth - コンテナの最大幅
   * @property maxHeight - コンテナの最大高さ
   */
  static container: Pattern<{
    scroll?: boolean;
    padding?: Spacings | SpacingsXY | SpacingsAll;
    margin?: Spacings | SpacingsXY | SpacingsAll;
    maxWidth?: Sizes;
    maxHeight?: Sizes;
  }> = ({ scroll = false, maxWidth = '7xl', maxHeight, padding, margin }) => {
    return ({ theme }) => ({
      maxWidth: theme.sizes[maxWidth],
      maxHeight: maxHeight ? theme.sizes[maxHeight] : undefined,
      padding: Patterns.spacing(padding, theme),
      margin: Patterns.spacing(margin, theme),
      height: scroll ? '100%' : 'auto',
      overflow: scroll ? 'auto' : 'visible',
    });
  };

  /**
   * 余白、サイズなどを指定します。
   * @property padding - 要素の内側の余白
   * @property margin - 要素の外側の余白
   * @property width - 要素の幅
   * @property height - 要素の高さ
   * @property backgroundColor - 要素の背景色
   * @property border - 要素のボーダー
   */
  static box: Pattern<{
    padding?: Spacings | SpacingsXY | SpacingsAll;
    margin?: Spacings | SpacingsXY | SpacingsAll;
    width?: Sizes;
    height?: Sizes;
    backgroundColor?: BackgroundColors;
    border?: Borders;
  }> = ({ padding, margin, width, height, backgroundColor, border }) => {
    return ({ theme }) => ({
      padding: Patterns.spacing(padding, theme),
      margin: Patterns.spacing(margin, theme),
      width: width ? theme.sizes[width] : undefined,
      height: height ? theme.sizes[height] : undefined,
      backgroundColor: backgroundColor
        ? theme.colors.background[backgroundColor]
        : undefined,
      border: border ? theme.borders[border] : undefined,
    });
  };

  /**
   * 要素を水平または垂直に並べて、間隔を設定するために使用されます。
   * @property direction - スタックのフレックス方向
   * @property gap - スタック内の要素間の間隔
   * @property align - css align-items プロパティのエイリアス
   * @property justify - css justify-content プロパティのエイリアス
   */
  static stack: Pattern<{
    direction?: 'horizontal' | 'vertical';
    gap?: Spacings;
    align?: Align;
    justify?: Justify;
  }> = ({ direction = 'vertical', gap, align, justify }) => {
    return ({ theme }) => ({
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      gap: gap ? theme.spacings[gap] : undefined,
      alignItems: align,
      justifyContent: justify,
    });
  };

  /**
   * Flex コンテナーの作成に使用され、flexプロパティへのいくつかのショートカットを提供します
   * @property direction - Flex コンテナーの方向
   * @property align - css align-items プロパティのエイリアス
   * @property justify - css justify-content プロパティのエイリアス
   * @property wrap - css flex-wrap プロパティのエイリアス
   * @property basis - css flex-basis プロパティのエイリアス
   * @property grow - css flex-grow プロパティのエイリアス
   * @property shrink - css flex-shrink プロパティのエイリアス
   */
  static flex: Pattern<{
    direction?: 'horizontal' | 'vertical';
    align?: Align;
    justify?: Justify;
    wrap?: boolean;
    basis?: number;
    grow?: number;
    shrink?: number;
  }> = ({
    direction = 'horizontal',
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
  }) => {
    return () => ({
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      flexBasis: basis,
      flexGrow: grow,
      flexShrink: shrink,
    });
  };

  /**
   * スペーサーを作成するために使用されます。
   * @example
   * ```tsx
   * const Spacer = styled('div')(Patterns.Spacer());
   * ```
   */
  static spacer: Pattern<void> = () => {
    return () => ({ flex: 1 });
  };

  /**
   * 水平または垂直のディバイダーを作成するために使用されます
   * @property direction - ディバイダーの方向
   * @property tickness - ディバイダーの太さ
   * @example
   * ```tsx
   * const Divider = styled('div')(Patterns.Divider({ direction: 'vertical' }));
   * ```
   */
  static divider: Pattern<{
    direction?: 'horizontal' | 'vertical';
    tickness?: boolean;
  }> = ({ direction = 'horizontal', tickness = false }) => {
    return ({ theme }) => {
      if (direction === 'horizontal') {
        return {
          width: theme.sizes.full,
          height: tickness ? '2px' : '1px',
        };
      }

      return {
        width: tickness ? '2px' : '1px',
        height: theme.sizes.full,
        color: theme.colors.font.sub,
      };
    };
  };

  /**
   * Ellipsis を定義するために使用されます。複数行も対応。
   * @property lineClamp - 表示する行数
   * @example
   * ```tsx
   * const Text = styled('div')(Patterns.ellipsis());
   * // 2行以降省略
   * const Text = styled('div')(Patterns.ellipsis({ lineClamp: 2 }));
   * ```
   */
  static ellipsis: Pattern<{
    lineClamp?: number;
  }> = ({ lineClamp }) => {
    if (!lineClamp) {
      return () => ({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      });
    }

    return () => ({
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: lineClamp.toString(),
      overflow: 'hidden',
    });
  };
}

export default Patterns;
