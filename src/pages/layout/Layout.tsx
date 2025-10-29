import { Outlet } from 'react-router';
import { Layout as MainLayout } from 'antd';
import { Header } from './header';
import { Sider } from './sider';
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
