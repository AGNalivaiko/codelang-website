import { queryOptions } from '@tanstack/react-query';
import type { User } from 'types';
import { apiInstance, type QueryResponse } from '../api-instance';
import { USERS_QUERY_KEY } from '../constants';

export const userApi = {
  getUsersQueryOptions: (limit: number = 50) =>
    queryOptions({
      queryKey: USERS_QUERY_KEY,
      queryFn: ({ signal }) =>
        apiInstance<QueryResponse<User[]>>(`/users?limit=${limit}`, { signal })
    })
};
