import { ReduxProvider, TanstackQueryProvider, RouterProvider } from './providers';
import { Router } from './router';

import './global.css';

export const App = () => {
  return (
    <ReduxProvider>
      <TanstackQueryProvider>
        <RouterProvider>
          <Router />
        </RouterProvider>
      </TanstackQueryProvider>
    </ReduxProvider>
  );
};
