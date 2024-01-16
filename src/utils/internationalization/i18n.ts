import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from "./langs/es.json";
import en from "./langs/en.json";
import { DEFAULT_LANG } from 'utils/constants/lang';

const resources = {
  en: {
    translation: {
      ...en
    },
  },
  es: {
    translation: {
      ...es
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: DEFAULT_LANG, // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;