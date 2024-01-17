import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import ContractRegister from '.';

const ContractRegisterRouter: RouteObject = {
  path: getRoutePath('ContractRegister'),
  element: <ContractRegister />,
};

export default ContractRegisterRouter;
