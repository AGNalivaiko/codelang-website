import type { Question } from '@custom-types';
import { queryOptions } from '@tanstack/react-query';
import { apiInstance } from '../api-instance';
import type { QueryResponse } from '../api-instance';
import { QUESTIONS_QUERY_KEY } from '../constants';

export const questionApi = {
  getQuestionsQueryOptions: (limit: number = 50) =>
    queryOptions({
      queryKey: QUESTIONS_QUERY_KEY,
      queryFn: ({ signal }) =>
        apiInstance<QueryResponse<Question[]>>(`/questions?limit=${limit}`, { signal })
    })
};
