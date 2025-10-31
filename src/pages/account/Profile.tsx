import { Button, Typography, Avatar, Row } from 'antd';
import { EditOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import './profile-card.css';
import { ProfileStats } from './ProfileStats';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearUser } from '../../store/slices/auth';

export const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleDeleteProfile = () => {
    dispatch(clearUser());
  };

  return (
    <>
      <Typography.Title level={3} className='profile-title'>
        {`Welcome, `}
        <span className='profile-name'>{user?.username}</span>
      </Typography.Title>

      <Row
        style={{
          width: '100%',
          border: '1px solid #f0f0f0',
          padding: '1%'
        }}
      >
        <Row
          style={{
            width: '100%',
            justifyContent: 'center',
            gap: '10%'
          }}
        >
          <Avatar style={{ width: 100, height: 100, marginTop: '3%' }} icon={<UserOutlined />} />

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
        <ProfileStats />
      </Row>
    </>
  );
};
