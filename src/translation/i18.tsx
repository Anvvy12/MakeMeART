import en from './en/translation';
import ua from './ua/translation';
import i18n from 'i18next';

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
  ns: ['translation'],
  defaultNS: 'translation',
  // debug: false,
  returnObjects: true,
  keySeparator: '.',
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
