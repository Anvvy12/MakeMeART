import en from './en/translation';
import ua from './ua/translation';
import i18n from 'i18next';
import { LOCAL_STORAGE_LANGUAGE_KEY } from 'constants/LANGUAGES_CONSTANTS';

export type Language = typeof en;

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n.init({
  // we init with resources
  resources,
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  // debug: false,
  returnObjects: true,
  keySeparator: '.',
  detection: {
    order: ['localStorage'],
    caches: ['localStorage'],
    lookupLocalStorage: LOCAL_STORAGE_LANGUAGE_KEY,
  },
  interpolation: {
    escapeValue: false,
    skipOnVariables: false,
  },
  appendNamespaceToMissingKey: true,
});

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    nsSeparator: '';
    resources: Record<string, Language>;
  }
}

export default i18n;
