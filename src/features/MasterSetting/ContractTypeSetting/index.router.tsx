import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import ContractTypeSetting from '.';

const ContractTypeSettingRouter: RouteObject = {
  path: getRoutePath('ContractTypeSetting'),
  element: <ContractTypeSetting />,
};

export default ContractTypeSettingRouter;
