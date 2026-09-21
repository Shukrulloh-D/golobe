import { RouterProvider } from 'react-router-dom';
import { ToastProvider } from 'shared/lib/toast';
import { router } from './router';

export const App = () => (
  <ToastProvider>
    <RouterProvider router={router} />
  </ToastProvider>
);
