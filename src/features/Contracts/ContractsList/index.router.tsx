import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import ContractsList from './ContractsList';

const ContractsListRouter: RouteObject = {
  path: getRoutePath('ContractsList'),
  element: <ContractsList />,
};

export default ContractsListRouter;
