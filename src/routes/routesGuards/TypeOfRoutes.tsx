import { Outlet, Navigate } from 'react-router';
import type { FC } from 'react';

interface RouteGuardProps {
  isLoggedIn: boolean;
}

export const GuestRoutes: FC<RouteGuardProps> = ({ isLoggedIn }) => {
  return !isLoggedIn ? <Outlet /> : <Navigate to='/' replace />;
};

export const PrivateRoute: FC<RouteGuardProps> = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to='/login' replace />;
};
