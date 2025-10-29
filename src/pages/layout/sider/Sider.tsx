import { useState, type FC } from 'react';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import { UserSection } from './UserSection';

const getCurrentItemOfSider = (pathname: string) => {
  switch (pathname) {
    case '/':
      return ['1'];
    case '/my-account':
      return ['2'];
    case '/post-snippet':
      return ['3'];
    case '/my-snippets':
      return ['4'];
    case '/questions':
      return ['5'];
    case '/users':
      return ['6'];
    default:
      return ['0'];
  }
};

export const Sider: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('sider');
  const location = useLocation();

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
    <Layout.Sider
      collapsedWidth={100}
      collapsed={collapsed}
      style={{
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#0958d9',
        maxWidth: '10vw',
        minHeight: '93vh',
        maxHeight: '93vh'
      }}
    >
      <UserSection collapsed={collapsed} onClick={toggleCollapsed} />
      <Menu
        mode='inline'
        theme='dark'
        defaultSelectedKeys={['1']}
        selectedKeys={getCurrentItemOfSider(location.pathname)}
        items={items}
        style={{ background: '#0958d9' }}
      />
    </Layout.Sider>
  );
};
