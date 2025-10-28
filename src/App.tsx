import { Router } from './router';
import { ReduxProvider, TanstackQueryProvider, RouterProvider } from './providers';

import './styles/main.css';

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
