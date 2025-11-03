import { Typography } from 'antd';
import { useAppSelector } from '@hooks';
import styles from '../account.module.css';

export const ProfileTitle = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <Typography.Title level={3} className={styles.profileTitle}>
      {`Welcome, `}
      <span className={styles.profileName}>{user?.username}</span>
    </Typography.Title>
  );
};
