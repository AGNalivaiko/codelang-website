import { ROUTER_PATHS } from '@constants';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useNavigate } from 'react-router';
import { userApi } from './user-api';

export const useSignUp = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const { mutate: signUp, isPending } = useMutation({
    ...userApi.signUp(),
    onSuccess: () => {
      api.success({
        message: 'Регистрация прошла успешно',
        description: 'Вы были успешно зарегестрированы'
      });
      navigate(ROUTER_PATHS.LOGIN);
    },
    onError: (error) => {
      api.error({
        message: 'Ошибка регистрации',
        description: `Ошибка: ${error.message}`
      });
    }
  });

  return {
    signUp,
    isPending,
    contextHolder
  };
};
