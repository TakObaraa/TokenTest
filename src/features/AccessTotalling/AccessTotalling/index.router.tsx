import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import AccessTotalling from '.';

const AccessTotallingRouter: RouteObject = {
  path: getRoutePath('AccessTotalling'),
  element: <AccessTotalling />,
};

export default AccessTotallingRouter;
