import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router';
import { ROUTER_PATHS } from '@constants';

export const RouterProvider: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter basename={ROUTER_PATHS.HOME}>{children}</BrowserRouter>;
};
