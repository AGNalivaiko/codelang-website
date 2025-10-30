import { mutationOptions, queryOptions } from '@tanstack/react-query';
import type { User, NewUser } from 'types';
import { apiInstance, type QueryResponse } from '../api-instance';
import { USERS_QUERY_KEY } from '../constants';
import { USER_REGISTRATION_KEY } from '../constants';
import type { MutationFunctionContext } from '@tanstack/react-query';

type MutationContextWithSignal = MutationFunctionContext & {
  signal?: AbortSignal;
};

export const userApi = {
  getUsersQueryOptions: (limit: number = 50) =>
    queryOptions({
      queryKey: USERS_QUERY_KEY,
      queryFn: ({ signal }) =>
        apiInstance<QueryResponse<User[]>>(`/users?limit=${limit}`, { signal })
    }),
  postRegisterUser: () =>
    mutationOptions({
      mutationKey: USER_REGISTRATION_KEY,
      mutationFn: (data: NewUser, context: MutationContextWithSignal) =>
        apiInstance('/register', { method: 'POST', json: data, signal: context.signal })
    })
};
