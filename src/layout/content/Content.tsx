import { type FC } from 'react';
import type { ContentProps } from './types';
import './style.css';
import { Layout } from 'antd';
import { AppRoutes } from '../../routes';

export const Content: FC<ContentProps> = () => {
  return <Layout.Content className='content'>{<AppRoutes />}</Layout.Content>;
};
