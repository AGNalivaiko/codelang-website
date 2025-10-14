import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import type { UserProfileProps } from './type';
import type { FC } from 'react';
import './style.css';

export const UserProfile: FC<UserProfileProps> = ({ collapsed, onClick }) => {
  return (
    <div className='user-profile'>
      <div className='user-avatar'>
        <Avatar />
      </div>
      <div className='user-name'>Denis</div>
      <Button type='text' size='small' style={{ color: 'white' }} onClick={onClick}>
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </Button>
    </div>
  );
};
