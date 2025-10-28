import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Router } from './router';
import { ReduxProvider } from './providers';
import { BrowserRouter } from 'react-router';
import { QueryClientProviderElement } from './providers';
import './styles/main.css';

export const App = () => {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <QueryClientProviderElement>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} position='bottom' />
        </QueryClientProviderElement>
      </BrowserRouter>
    </ReduxProvider>
  );
};
