import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import type { SiderProps } from './types';
import { useState, type FC } from 'react';
import './sider.css';
import { UserProfile } from '../../components';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export const Sider: FC<SiderProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('sider');

  const toggleCollapsed = () => setCollapsed((collapsed) => !collapsed);

  const items = [
    { key: '1', icon: <HomeOutlined />, label: <Link to='/'>{t('home')}</Link> },
    {
      key: '2',
      icon: <UserOutlined />,
      label: <Link to='/my-account'>{t('myAccount')}</Link>
    },
    {
      key: '3',
      icon: <FileTextOutlined />,
      label: <Link to='/post-snippet'>{t('postSnippet')}</Link>
    },
    {
      key: '4',
      icon: <FileTextOutlined />,
      label: <Link to='/my-snippets'>{t('mySnippets')}</Link>
    },
    {
      key: '5',
      icon: <QuestionCircleOutlined />,
      label: <Link to='/questions'>{t('questions')}</Link>
    },
    {
      key: '6',
      icon: <UsergroupAddOutlined />,
      label: <Link to='/users'>{t('users')}</Link>
    }
  ];

  return (
    <Layout.Sider className='sider' collapsedWidth={100} collapsed={collapsed}>
      <UserProfile collapsed={collapsed} onClick={toggleCollapsed} />
      <Menu
        mode='inline'
        theme='dark'
        defaultSelectedKeys={['1']}
        items={items}
        style={{ background: '#0958d9' }}
      />
    </Layout.Sider>
  );
};
