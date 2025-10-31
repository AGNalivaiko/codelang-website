import { EditOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Typography, Avatar } from 'antd';
import type { FC } from 'react';
import type { myProfileCardProps } from './types';
import './profile-card.css';

export const AccountCard: FC<myProfileCardProps> = ({ user, stats, onClick }) => {
  return (
    <>
      <Typography.Title level={3} className='profile-title'>
        {`Welcome, `}
        <span className='profile-name'>{user?.username}</span>
      </Typography.Title>
      <div className='profile-container'>
        <div className='profile-container-top'>
          <div className='profile-container-top-avatar'>
            <Avatar style={{ width: 100, height: 100 }} icon={<UserOutlined />} />
          </div>
          <div className='profile-container-top-userinfo'>
            <span className='profile-container-top-user-name'>{user?.username}</span>
            <span className='profile-container-top-user-id'> {`Id: ${user?.id}`}</span>
            <span className='profile-container-top-user-role'>{`Role: ${user?.role}`}</span>
            <div className='profile-container-buttons'>
              <Button
                icon={<EditOutlined />}
                style={{ backgroundColor: '#f39c12', color: 'white', border: 'none' }}
              />
              <Button danger icon={<DeleteOutlined />} onClick={onClick} />
            </div>
          </div>
        </div>
        <pre className='profile-container-bottom'>{stats}</pre>
      </div>
    </>
  );
};
