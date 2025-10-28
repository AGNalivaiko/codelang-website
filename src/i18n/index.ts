import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    ns: ['sider'],
    backend: {
      loadPath: '/src/i18n/locales/{{lng}}/{{ns}}.json'
    },
    fallbackLng: 'ru'
  });

export default i18n;
