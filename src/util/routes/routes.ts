// NOTE: アルファベット順に記述しています
export type PageNameType =
  | 'Root'
  | 'SiteMap'
  | 'Sample'
  | 'ContractsList'
  | 'Contract'
  | 'ContractRegister'
  | 'StaffManager'
  | 'OtherDataImport'
  | 'AccessTotalling'
  | 'AccessTotallingDetail'
  | 'PopupNewsSetting'
  | 'Setting'
  | 'ContractTypeSetting'
  | 'FacilityTypeSetting'
  | 'FacilityTypeGroupSetting'
  | 'FeeStructureSetting';

// NOTE: アルファベット順に記述しています
// NOTE: キャメルケースの部分はパスパラメータ
export type RoutePathType =
  | '/'
  | '/SiteMap'
  | '/Sample'
  | '/ContractsList'
  | '/Contract'
  | '/ContractRegister'
  | '/StaffManager'
  | '/OtherDataImport'
  | '/AccessTotalling/'
  | '/AccessTotalling/Detail'
  | '/PopupNewsSetting'
  | '/Setting'
  | '/MasterSetting/ContractTypeSetting'
  | '/MasterSetting/FacilityTypeSetting'
  | '/MasterSetting/FacilityTypeGroupSetting'
  | '/MasterSetting/FeeStructureSetting';

export type PageRouteMapType = Record<PageNameType, RoutePathType>;

// NOTE: アルファベット順（キー名基準）に記述しています
const PageRouteMap: PageRouteMapType = {
  Root: '/',
  SiteMap: '/SiteMap',
  Sample: '/Sample',
  ContractsList: '/ContractsList',
  Contract: '/Contract',
  ContractRegister: '/ContractRegister',
  StaffManager: '/StaffManager',
  OtherDataImport: '/OtherDataImport',
  AccessTotalling: '/AccessTotalling/',
  AccessTotallingDetail: '/AccessTotalling/Detail',
  PopupNewsSetting: '/PopupNewsSetting',
  Setting: '/Setting',
  ContractTypeSetting: '/MasterSetting/ContractTypeSetting',
  FacilityTypeSetting: '/MasterSetting/FacilityTypeSetting',
  FacilityTypeGroupSetting: '/MasterSetting/FacilityTypeGroupSetting',
  FeeStructureSetting: '/MasterSetting/FeeStructureSetting',
};

/** @deprecated ReactRouter公式のgeneratePathを使ってください */
export const getRoutePath = (pageName: PageNameType): RoutePathType =>
  PageRouteMap[pageName] ? PageRouteMap[pageName] : PageRouteMap.Root;
