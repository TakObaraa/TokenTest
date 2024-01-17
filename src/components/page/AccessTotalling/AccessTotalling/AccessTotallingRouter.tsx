import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import AccessTotalling from './AccessTotalling';

const AccessTotallingRouter: RouteObject = {
  path: getRoutePath('AccessTotalling'),
  element: <AccessTotalling />,
};

export default AccessTotallingRouter;
