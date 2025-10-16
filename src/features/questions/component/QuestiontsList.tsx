import { useQuery } from '@tanstack/react-query';
import { fetchQuestions } from '../services/fetchQuestions';
import { Spin, List } from 'antd';
import { QuestionCard } from '../../../components';
import './style.css';

export const QuestionsList = () => {
  const {
    data: questions,
    error,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestions
  });

  if (isLoading) return <>{<Spin size='large' />}</>;
  if (isError) return <>{error?.message}</>;

  return (
    <>
      <List
        className='question-container'
        dataSource={questions}
        grid={{ column: '1', gutter: '1' }}
        pagination={{ position: 'top', align: 'end' }}
        renderItem={(question) => {
          return <QuestionCard question={question} />;
        }}
      />
    </>
  );
};
