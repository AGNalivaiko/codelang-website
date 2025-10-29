import { queryOptions } from '@tanstack/react-query';
import { QUESTIONS_QUERY_KEY } from '../constants';
import { apiInstance } from '../api-instance';
import type { Question } from '../../types/question.types';
import type { QueryResponse } from '../api-instance';

export const questionApi = {
  getQuestionsQueryOptions: (limit: number = 50) =>
    queryOptions({
      queryKey: QUESTIONS_QUERY_KEY,
      queryFn: ({ signal }) =>
        apiInstance<QueryResponse<Question[]>>(`/questions?limit=${limit}`, { signal })
    })
};
