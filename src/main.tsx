import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18';

import App from './App';
import { LOCAL_STORAGE_LANGUAGE_KEY } from './constants/LANGUAGES_CONSTANTS';

i18n.changeLanguage(localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) ?? 'en');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
