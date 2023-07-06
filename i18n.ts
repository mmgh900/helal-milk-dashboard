/*
'use client'
import i18n from 'i18next';
import { initReactI18next, useTranslation as useOriginalTranslation } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next'
    }
  },
  fr: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next'
    }
  }
};
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('locales/en.json')
    },
    fa: {
      translation: require('locales/fa.json')
    }
  },
  lng: 'fa',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  }
});


export default i18n;
*/

