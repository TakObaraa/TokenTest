import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import PopupNewsSetting from '.';

const PopupNewsSettingRouter: RouteObject = {
  path: getRoutePath('PopupNewsSetting'),
  element: <PopupNewsSetting />,
};

export default PopupNewsSettingRouter;
