import { type FC } from 'react';
import type { ContentProps } from './types';
import './style.css';
import { Layout } from 'antd';
import { AppRoutes } from '../../routes';
import { RegisterPage } from '../../pages';
import { useAppSelector } from '../../hooks';

export const Content: FC<ContentProps> = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <Layout.Content className='content'>{user ? <AppRoutes /> : <RegisterPage />}</Layout.Content>
  );
};
