import { Layout } from 'antd';
import { Header, Sider, Content } from './layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ maxHeight: '100vh' }}>
        <Header />
        <Layout>
          <Sider />
          <Content />
        </Layout>
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} position='bottom' />
    </QueryClientProvider>
  );
}

export default App;
