import { ROUTER_PATHS } from '@constants';
import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router';

export const RouterProvider: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter basename={ROUTER_PATHS.HOME}>{children}</BrowserRouter>;
};
