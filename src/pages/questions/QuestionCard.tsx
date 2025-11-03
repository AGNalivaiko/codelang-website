import { EyeFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';
import { useState } from 'react';
import type { FC } from 'react';
import styles from './questions.module.css';
import type { QuestionCardProps } from './types-question-card';

export const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
  const [hidden, setHidden] = useState(false);
  const { Title, Text, Paragraph } = Typography;

  if (hidden) return null;

  return (
    <div className={styles.questionCard}>
      <div className={styles.questionCardHeader}>
        <Avatar className={styles.avatar} icon={<UserOutlined />} />
        <div className={styles.questionCardHeaderInfo}>
          <Title level={5} className={styles.questionCardTitle}>
            {question.title}
          </Title>
          <Text className={styles.questionCardMeta}>
            asked by user: {question.user.username.toLocaleUpperCase()}
          </Text>
        </div>
      </div>

      <Paragraph className={styles.questionCardContent}>{question.description}</Paragraph>

      <div className={styles.questionCardFooter}>
        <EyeFilled className={styles.iconEyes} onClick={() => setHidden(true)} />
      </div>
    </div>
  );
};
