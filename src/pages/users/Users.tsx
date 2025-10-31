import { useGetUsers } from '@api';
import { Avatar, List, Spin } from 'antd';
import { useTranslation } from 'react-i18next';

export const Users = () => {
  const { users, isLoading, isError, error } = useGetUsers();
  const [t] = useTranslation('users');

  const errorMessage = `${error?.message}`;

  if (isLoading)
    return <div style={{ margin: '3%', textAlign: 'center' }}>{<Spin size='large' />}</div>;
  if (isError) return <>{errorMessage}</>;

  return (
    <div
      style={{ margin: '15px auto', maxWidth: '1000px', marginBottom: '2%', textAlign: 'center' }}
    >
      <List
        dataSource={users}
        size='large'
        pagination={{ position: 'bottom', align: 'center' }}
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
