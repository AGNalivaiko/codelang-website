import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import type { UserProfileProps } from './type';
import type { FC } from 'react';
import './style.css';
import { useAppSelector } from '../../hooks';

export const UserProfile: FC<UserProfileProps> = ({ collapsed, onClick }) => {
  const user = useAppSelector((state) => state.user.user);
  const username = user?.username;

  return (
    <div className='user-profile'>
      <div className='user-avatar'>
        {user ? (
          <Avatar style={{ backgroundColor: '#1890ff' }}>{username?.[0].toUpperCase()}</Avatar>
        ) : (
          <Avatar />
        )}
      </div>
      <div className='user-name'>{username || 'user name'}</div>
      <Button type='text' size='small' style={{ color: 'white' }} onClick={onClick}>
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </Button>
    </div>
  );
};
