import { getRoutePath } from '@utils/routes/routes';
import { RouteObject } from 'react-router-dom';
import SamplePage from './SamplePage';

const SampleRouter: RouteObject = {
  path: getRoutePath('Sample'),
  element: <SamplePage />,
};

export default SampleRouter;
