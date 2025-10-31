import { useAppDispatch, useAppSelector } from '@hooks';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { logout } from '@store';

export const Logout = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.user?.isLoggedIn);
  const navigate = useNavigate();

  const handleOnClick = () => {
    dispatch(logout());
    navigate('/login');
  };

  const nameOfButton = isLoggedIn ? 'SIGN OUT' : 'LOG IN';

  return (
    <Button size='middle' style={{ borderRadius: '0px' }} onClick={handleOnClick}>
      {nameOfButton}
    </Button>
  );
};
