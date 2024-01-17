import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import AccessTotallingDetail from './AccessTotallingDetail';

const AccessTotallingDetailRouter: RouteObject = {
  path: getRoutePath('AccessTotallingDetail'),
  element: <AccessTotallingDetail />,
};

export default AccessTotallingDetailRouter;
