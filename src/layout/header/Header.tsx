import { Layout, Button } from 'antd';
import './header.css';
import type { FC } from 'react';
import { TranslationOutlined, PercentageOutlined } from '@ant-design/icons';
import { Link } from 'react-router';

export const Header: FC = () => {
  return (
    <Layout.Header className='header'>
      <div className='header_left_side'>
        <Button type='text' size='large' style={{ color: 'white', opacity: '0.5' }}>
          <Link to='/'>
            <PercentageOutlined />
            CODELANG
          </Link>
        </Button>
      </div>
      <div className='header_right_side'>
        <Button size='middle' style={{ borderRadius: '0px' }}>
          SIGN OUT
        </Button>
        <Button size='middle' type='text' style={{ color: 'white' }}>
          <TranslationOutlined />
          EN
        </Button>
      </div>
    </Layout.Header>
  );
};
