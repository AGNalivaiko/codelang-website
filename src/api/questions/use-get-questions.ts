import { useQuery } from '@tanstack/react-query';
import { questionApi } from './question-api';

export const useGetQuestions = () => {
  const { data, error, isError, isLoading } = useQuery({
    ...questionApi.getQuestionsQueryOptions()
  });

  return {
    questions: data?.data?.data || [],
    error,
    isError,
    isLoading
  };
};
