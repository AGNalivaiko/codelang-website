import { useQuery } from '@tanstack/react-query';
import { fetchQuestions } from './fetchQuestions';
import { Spin, List } from 'antd';
import { QuestionCard } from '../../components';

export const Questions = () => {
  const {
    data: questions,
    error,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestions
  });

  if (isLoading)
    return (
      <>
        {
          <div style={{ margin: '3%', textAlign: 'center' }}>
            <Spin size='large' />
          </div>
        }
      </>
    );
  if (isError) return <>{error?.message}</>;

  return (
    <>
      <List
        style={{ maxWidth: 1000, margin: '2% auto' }}
        dataSource={questions}
        pagination={{ position: 'bottom', align: 'center' }}
        renderItem={(question) => {
          return <QuestionCard question={question} />;
        }}
      />
    </>
  );
};
