// NOTE: アルファベット順に記述しています
export type ErrorPageNameType =
  | '__400__'
  | '__401__'
  | '__403__'
  | '__404__'
  | '__408__'
  | '__500__'
  | '__503__'
  | '__csrf__'
  | '__forceUpdate__'
  | '__network__';

// NOTE: アルファベット順に記述しています
// NOTE: キャメルケースの部分はパスパラメータ
export type ErrorRoutePathType =
  | '/__400__'
  | '/__401__'
  | '/__403__'
  | '/__404__'
  | '/__408__'
  | '/__500__'
  | '/__503__'
  | '/__csrf__'
  | '/__forceUpdate__'
  | '/__network__';

export type ErrorPageRouteMapType = Record<
  ErrorPageNameType,
  ErrorRoutePathType
>;

// NOTE: アルファベット順（キー名基準）に記述しています
const ErrorPageRouteMap: ErrorPageRouteMapType = {
  __400__: '/__400__',
  __401__: '/__401__',
  __403__: '/__403__',
  __404__: '/__404__',
  __408__: '/__408__',
  __500__: '/__500__',
  __503__: '/__503__',
  __csrf__: '/__csrf__',
  __forceUpdate__: '/__forceUpdate__',
  __network__: '/__network__',
};

export const getErrorRoutePath = (
  pageName: ErrorPageNameType,
): ErrorRoutePathType => ErrorPageRouteMap[pageName];

export type ErrorRouteType = `/Error${ErrorRoutePathType}`;

export const getErrorRoute = (pageName: ErrorPageNameType): ErrorRouteType =>
  `/Error${ErrorPageRouteMap[pageName]}`;
