import { Button, Avatar, Row, Typography } from 'antd';
import { EditOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { clearUser } from '../../../store/slices/auth';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import styles from '../account.module.css';

const { Text } = Typography;

export const ProfileInfo = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleDeleteProfile = () => {
    dispatch(clearUser());
  };

  return (
    <Row className={styles.profileInfoContainer}>
      <Avatar className={styles.avatar} icon={<UserOutlined />} />

      <Row className={styles.profileInfo}>
        <Text className={styles.profileInfoBold}>{user?.username}</Text>
        <Text className={styles.profileInfoDefault}> {`Id: ${user?.id}`}</Text>
        <Text className={styles.profileInfoDefault}>{`Role: ${user?.role}`}</Text>
        <Row className={styles.profileInfoButtonsContainer}>
          <Button className={styles.profileInfoButton} icon={<EditOutlined />} />
          <Button danger icon={<DeleteOutlined />} onClick={handleDeleteProfile} />
        </Row>
      </Row>
    </Row>
  );
};
