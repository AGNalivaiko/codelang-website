import { useLocation, useNavigate } from 'react-router';
import { ROUTER_PATHS } from '../constants';
import { useAppSelector } from './reduxHooks';

export const useCheckAuth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.user.user?.isLoggedIn ?? false);

  const authRoutes = [ROUTER_PATHS.LOGIN, ROUTER_PATHS.REGISTER];
  const isAuthRoute = authRoutes.includes(pathname);

  if (isLoggedIn && isAuthRoute) {
    return navigate(ROUTER_PATHS.HOME);
  }

  return isLoggedIn;
};
