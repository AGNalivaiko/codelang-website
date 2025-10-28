import { useQuery } from '@tanstack/react-query';
import { userApi } from './user-api';

export const useGetUsers = () => {
  const { data, error, isError, isLoading } = useQuery({ ...userApi.getUsersQueryOptions() });

  return {
    users: data?.data?.data || [],
    error,
    isError,
    isLoading
  };
};
