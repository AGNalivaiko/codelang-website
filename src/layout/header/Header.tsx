import { Layout, Button } from 'antd';
import './header.css';
import { type FC } from 'react';
import { TranslationOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export const Header: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = i18n.language == 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  const displayLang = i18n.language.toUpperCase();

  return (
    <Layout.Header className='header'>
      <div className='header_left_side'>
        <Button type='text' size='large' style={{ color: 'white', opacity: '0.5' }}>
          <Link to='/'>{`</> CODELANG`}</Link>
        </Button>
      </div>
      <div className='header_right_side'>
        <Button size='middle' style={{ borderRadius: '0px' }}>
          SIGN OUT
        </Button>
        <Button size='middle' type='text' style={{ color: 'white' }} onClick={handleLanguageChange}>
          <TranslationOutlined />
          {displayLang}
        </Button>
      </div>
    </Layout.Header>
  );
};
