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

  if (isLoading)
    return (
      <>
        {
          <div className='container-for-loading'>
            <Spin size='large' />
          </div>
        }
      </>
    );
  if (isError) return <>{error?.message}</>;

  return (
    <>
      <List
        className='question-container'
        dataSource={questions}
        pagination={{ position: 'bottom', align: 'center' }}
        renderItem={(question) => {
          return <QuestionCard question={question} />;
        }}
      />
    </>
  );
};
