import Notifications from '@app/Notifications';
import { store } from '@stores/stores';
import EmotionProvider from '@styles/EmotionProvider';
import MantineProvider from '@styles/MantineProvider';
import { LazyMotion, domAnimation } from 'framer-motion';
import react from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import routerDefinition from './components/page/routerDefinition';

import './styles/reset.css';

const container = document.getElementById('root');

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(container!);

const Element = () => <Outlet />;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Element />,
    children: routerDefinition,
  },
]);

root.render(
  <react.StrictMode>
    <Provider store={store}>
      <LazyMotion features={domAnimation}>
        <EmotionProvider>
          <MantineProvider>
            <Notifications />
            <RouterProvider router={router} />
          </MantineProvider>
        </EmotionProvider>
      </LazyMotion>
    </Provider>
  </react.StrictMode>,
);
