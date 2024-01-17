import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import SiteMap from '../../sitemap';
import AccessTotallingRouter from './AccessTotalling/AccessTotalling/AccessTotallingRouter';
import AccessTotallingDetailRouter from './AccessTotalling/AccessTotallingDetail/AccessTotallingDetailRouter';
import ContractRouter from './Contracts/Contract/Contract/ContractRouter';
import OtherDataImportRouter from './Contracts/Contract/OtherDataImport/OtherDataImportRouter';
import StaffManagerRouter from './Contracts/Contract/StaffManager/StaffManagerRouter';
import ContractRegisterRouter from './Contracts/ContractRegister/ContractRegisterRouter';
import ContractsListRouter from './Contracts/ContractsList/ContractsListRouter';
import ContractTypeSettingRouter from './MasterSetting/ContractTypeSetting/ContractTypeSettingRouter';
import FacilityTypeGroupRouter from './MasterSetting/FacilityTypeGroupSetting/FacilityTypeGroupSettingRouter';
import FacilityTypeSettingRouter from './MasterSetting/FacilityTypeSetting/FacilityTypeSettingRouter';
import FeeStructureSettingRouter from './MasterSetting/FeeStructureSetting/FeeStructureSettingRouter';
import PopupNewsSettingRouter from './PopupNewsSetting/PopupNewsSettingRouter';
import SampleRouter from './SamplePage/SampleRouter';
import SettingRouter from './Setting/SettingRouter';

/**
 * NOTE: コンポーネント名が衝突した場合はimport名を変更する。
 *       (pagesのコンポーネントは当ファイルのみで呼び出す想定)
 *
 * router pathの各種設定を定義
 *  - router pathとcomponentのマッピング
 *
 */
const routerDefinition: RouteObject[] = [
  SampleRouter,
  ContractsListRouter,
  ContractRouter,
  ContractRegisterRouter,
  AccessTotallingRouter,
  AccessTotallingDetailRouter,
  PopupNewsSettingRouter,
  SettingRouter,
  ContractTypeSettingRouter,
  StaffManagerRouter,
  OtherDataImportRouter,
  FacilityTypeSettingRouter,
  FacilityTypeGroupRouter,
  FeeStructureSettingRouter,
  {
    path: getRoutePath('Root'),
    element: <SiteMap />,
    // acd: { deviceTypes: ['desktop', 'tablet', 'mobile'] },
  },
  {
    path: getRoutePath('SiteMap'),
    element: <SiteMap />,
    // acd: { deviceTypes: ['desktop', 'tablet', 'mobile'] },
  },
  // {
  //   path: getRoutePath('Sample'),
  //   element: <SamplePage />,
  // },
];

export default routerDefinition;
