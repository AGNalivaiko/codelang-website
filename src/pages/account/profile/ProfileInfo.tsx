import { Button, Avatar, Row } from 'antd';
import { EditOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { clearUser } from '../../../store/slices/auth';
import styles from '../account.module.css';

export const ProfileInfo = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleDeleteProfile = () => {
    dispatch(clearUser());
  };

  return (
    <Row className={styles.profileInfoContainer}>
      <Avatar className={styles.avatar} icon={<UserOutlined />} />

      <div className='profile-container-top-userinfo'>
        <span className='profile-container-top-user-name'>{user?.username}</span>
        <span className='profile-container-top-user-id'> {`Id: ${user?.id}`}</span>
        <span className='profile-container-top-user-role'>{`Role: ${user?.role}`}</span>
        <div className='profile-container-buttons'>
          <Button
            icon={<EditOutlined />}
            style={{ backgroundColor: '#f39c12', color: 'white', border: 'none' }}
          />
          <Button danger icon={<DeleteOutlined />} onClick={handleDeleteProfile} />
        </div>
      </div>
    </Row>
  );
};
