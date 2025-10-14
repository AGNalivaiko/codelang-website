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

const items = [
  { key: '1', icon: <HomeOutlined />, label: <Link to='/'>Home</Link> },
  { key: '2', icon: <UserOutlined />, label: <Link to='/my-account'>My Account</Link> },
  { key: '3', icon: <FileTextOutlined />, label: <Link to='/post-snippet'>Post snippet</Link> },
  { key: '4', icon: <FileTextOutlined />, label: <Link to='/my-snippets'>My snippets</Link> },
  { key: '5', icon: <QuestionCircleOutlined />, label: <Link to='/questions'>Questions</Link> },
  { key: '6', icon: <UsergroupAddOutlined />, label: <Link to='/users'>Users</Link> }
];

export const Sider: FC<SiderProps> = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((collapsed) => !collapsed);

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
