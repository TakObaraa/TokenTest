import { generatePath } from '@libraries/react-router';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: generatePath('/'),
    element: <Outlet />,
    children: [{}],
  },
]);

export default router;
