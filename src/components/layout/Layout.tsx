import { Outlet } from 'react-router';
import { Layout as MainLayout } from 'antd';
import { Header } from './Header';
import { Sider } from './Sider';
import { useCheckAuth } from '../../hooks';

export const Layout = () => {
  useCheckAuth();

  return (
    <MainLayout
      style={{
        maxHeight: '100vh',
        maxWidth: '100vw'
      }}
    >
      <Header />
      <MainLayout>
        <Sider />
        <MainLayout.Content
          style={{
            maxHeight: '100%',
            overflowY: 'auto',
            backgroundColor: 'white'
          }}
        >
          <Outlet />
        </MainLayout.Content>
      </MainLayout>
    </MainLayout>
  );
};
