import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import FacilityTypeSetting from './FacilityTypeSetting';

const FacilityTypeSettingRouter: RouteObject = {
  path: getRoutePath('FacilityTypeSetting'),
  element: <FacilityTypeSetting />,
};

export default FacilityTypeSettingRouter;
