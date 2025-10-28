import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Router } from './router';
import './styles/main.css';
import { ReduxProvider } from './providers';
import { BrowserRouterProvider } from './providers';

export const App = () => {
  return (
    <ReduxProvider>
      <BrowserRouterProvider>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} position='bottom' />
      </BrowserRouterProvider>
    </ReduxProvider>
  );
};
