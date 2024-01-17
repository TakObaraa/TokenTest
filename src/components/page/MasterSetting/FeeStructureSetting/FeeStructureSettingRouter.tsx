import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import FeeStructureSetting from './FeeStructureSetting';

const FeeStructureSettingRouter: RouteObject = {
  path: getRoutePath('FeeStructureSetting'),
  element: <FeeStructureSetting />,
};

export default FeeStructureSettingRouter;
