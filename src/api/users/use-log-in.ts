import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useNavigate } from 'react-router';
import { ROUTER_PATHS } from '@constants';
import { useAppDispatch } from '@hooks';
import { setUser } from '@store';
import { userApi } from './user-api';

export const useLogIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { mutate: login, isPending } = useMutation({
    ...userApi.logIn(),
    onSuccess: (response) => {
      const userData = response?.data;
      localStorage.setItem('user', JSON.stringify(userData));
      dispatch(
        setUser({
          id: userData.id,
          username: userData.username,
          role: userData.role,
          isLoggedIn: true
        })
      );
      navigate(ROUTER_PATHS.HOME);
    },
    onError: (error) => {
      console.log(error.message);
      api.error({
        message: 'Ошибка регистрации',
        description: `Ошибка: ${error.message}`
      });
    }
  });

  return {
    login,
    isPending,
    contextHolder
  };
};
