import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import type { FC } from 'react';
import './style.css';
import type { MouseEventHandler } from 'react';
import { useAppSelector } from '@hooks';

export type UserProfileProps = {
  collapsed: boolean;
  onClick: MouseEventHandler;
};

export const UserSection: FC<UserProfileProps> = ({ collapsed, onClick }) => {
  const user = useAppSelector((state) => state.user.user);
  const username = user?.username;
  const isLoggIn = user?.isLoggedIn;

  const isShownName = !collapsed && username;
  const isShownNameLoggOut = isLoggIn && isShownName;

  return (
    <div className='user-profile'>
      <div className='user-avatar'>
        {isLoggIn ? (
          <Avatar style={{ backgroundColor: '#1890ff' }}>{username?.[0].toUpperCase()}</Avatar>
        ) : (
          <Avatar />
        )}
      </div>
      <div className='user-name'>{isShownNameLoggOut}</div>
      <Button type='text' size='small' style={{ color: 'white' }} onClick={onClick}>
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </Button>
    </div>
  );
};
