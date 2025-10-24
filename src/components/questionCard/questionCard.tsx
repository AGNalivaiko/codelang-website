import { Avatar, Typography } from 'antd';
import type { FC } from 'react';
import type { QuestionCardProps } from './types';
import { EyeFilled, UserOutlined } from '@ant-design/icons';
import './style.css';
import { useState } from 'react';

export const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className='question-card'>
      <div className='question-card-header'>
        <Avatar className='avatar' icon={<UserOutlined />} />
        <div className='question-card-header-info'>
          <Typography.Title level={5} className='question-card-title'>
            {question.title}
          </Typography.Title>
          <Typography.Text className='question-card-meta'>
            asked by user: {question.user.username.toLocaleUpperCase()}
          </Typography.Text>
        </div>
      </div>
      <Typography.Paragraph className='question-card-contend'>
        {question.description}
      </Typography.Paragraph>
      <div className='question-card-footer'>
        <EyeFilled className='icon-eyes' onClick={() => setHidden(true)} />
      </div>
    </div>
  );
};
