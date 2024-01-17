import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import StaffManager from './StaffManager';

const StaffManagerRouter: RouteObject = {
  path: getRoutePath('StaffManager'),
  element: <StaffManager />,
};

export default StaffManagerRouter;
