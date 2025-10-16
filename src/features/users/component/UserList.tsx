import { fetchUsers } from '../services/fetchUsers';
import type { User } from '../types';
import './style.css';
import { Avatar, List, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

export const UsersList = () => {
  const [t] = useTranslation('users');
  const {
    data: users,
    isLoading,
    isError,
    error
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  const errorMessage = `${error?.message}`;

  if (isLoading) return <div className='container-for-loading'>{<Spin size='large' />}</div>;
  if (isError) return <>{errorMessage}</>;

  return (
    <div className='users-page-container'>
      <List
        dataSource={users}
        size='large'
        pagination={{ position: 'top', align: 'end' }}
        renderItem={(user) => {
          return (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar style={{ backgroundColor: '#1890ff' }}>
                    {user.username[0].toUpperCase()}
                  </Avatar>
                }
                title={user.username}
                description={`${t('role')}: ${user.role}`}
              />
            </List.Item>
          );
        }}
      />
    </div>
  );
};
