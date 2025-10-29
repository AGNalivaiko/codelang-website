import { type FC } from 'react';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Layout, Button, Row } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import { Logout } from './Logout';
import { useNavigate } from 'react-router';

const headerRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px'
};

export const Header: FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = () => {
    const newLang = i18n.language == 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  const handleOnclick = () => {
    navigate('/ask-question');
  };

  const displayLang = i18n.language.toUpperCase();

  return (
    <Layout.Header
      style={{
        textAlign: 'center',
        color: '#fff',
        maxHeight: '7vh',
        maxWidth: '100vw',
        backgroundColor: '#0958d9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Row style={headerRowStyle}>
        <Button type='text' size='large' style={{ color: 'white', opacity: '0.5' }}>
          <Link to='/'>{`</> CODELANG`}</Link>
        </Button>
      </Row>
      <Row style={headerRowStyle}>
        {location.pathname == '/questions' && (
          <Button size='middle' style={{ borderRadius: '0px' }} onClick={handleOnclick}>
            Ask Question
          </Button>
        )}
        <Logout />
        <Button size='middle' type='text' style={{ color: 'white' }} onClick={handleLanguageChange}>
          <TranslationOutlined />
          {displayLang}
        </Button>
      </Row>
    </Layout.Header>
  );
};
