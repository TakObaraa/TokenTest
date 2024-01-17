import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import FacilityTypeGroupSetting from './FacilityTypeGroupSetting';

const FacilityTypeGroupSettingRouter: RouteObject = {
  path: getRoutePath('FacilityTypeGroupSetting'),
  element: <FacilityTypeGroupSetting />,
};

export default FacilityTypeGroupSettingRouter;
