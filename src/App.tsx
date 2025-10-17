import { Layout } from 'antd';
import { Header, Sider, Content } from './layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './styles/main.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout className='main-container'>
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
