import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import StaffManager from './OtherDataImport';

const OtherDataImportRouter: RouteObject = {
  path: getRoutePath('OtherDataImport'),
  element: <StaffManager />,
};

export default OtherDataImportRouter;
