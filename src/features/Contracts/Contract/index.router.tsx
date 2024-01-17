import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import Contract from '.';

const ContractRouter: RouteObject = {
  path: getRoutePath('Contract'),
  element: <Contract />,
};

export default ContractRouter;
