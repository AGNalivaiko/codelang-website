import { useMutation } from '@tanstack/react-query';
import { userApi } from './user-api';
import { useNavigate } from 'react-router';
import { message } from 'antd';

export const useRegistrationUser = () => {
  const navigate = useNavigate();
  const { mutate, data, isPending, isSuccess, isError, error } = useMutation({
    ...userApi.postRegisterUser(),
    onSuccess: () => {
      message.success('Account was successfully registred', 1);
      navigate('/login');
    },
    onError: (error) => {
      alert('Ошибка регистрации');
      console.log('Ошибка при регистрации:', error.message);
    }
  });

  return {
    mutate,
    data,
    isPending,
    isSuccess,
    isError,
    error
  };
};
