import { RouterProvider } from 'react-router-dom';
import { ToastProvider } from 'shared/lib/toast';
import { ScrollPlane, CursorTrail } from 'shared/ui/animations';
import { router } from './router';

export const App = () => (
  <ToastProvider>
    <CursorTrail />
    <ScrollPlane />
    <RouterProvider router={router} />
  </ToastProvider>
);
