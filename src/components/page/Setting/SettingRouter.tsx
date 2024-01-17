import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import Setting from './Setting';

const SettingRouter: RouteObject = {
  path: getRoutePath('Setting'),
  element: <Setting />,
};

export default SettingRouter;
