import { Spin, List } from 'antd';
import { QuestionCard } from './QuestionCard';
import { useGetQuestions } from '../../api';

export const Questions = () => {
  const { questions, error, isError, isLoading } = useGetQuestions();

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
