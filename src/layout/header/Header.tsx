import { Layout, Button } from 'antd';
import './header.css';
import { type FC } from 'react';
import { TranslationOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { Signout_button, AskQuestion_button, ChangeLanguage_button } from '../../components';

export const Header: FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

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
        {location.pathname == '/questions' && <AskQuestion_button />}
        <Signout_button />
        <ChangeLanguage_button onClick={handleLanguageChange}>
          <TranslationOutlined />
          {displayLang}
        </ChangeLanguage_button>
      </div>
    </Layout.Header>
  );
};
