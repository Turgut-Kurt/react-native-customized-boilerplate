import en from '~/languages/en';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import tr from '~/languages/tr';
import global from './global';
export const init = () => {
  const lng = global.getLang();
  return i18next.use(initReactI18next).init({
    fallbackLng: 'tr',
    debug: true,
    resources: {tr, en},
    lng,
    compatibilityJSON: 'v3',
  });
};
