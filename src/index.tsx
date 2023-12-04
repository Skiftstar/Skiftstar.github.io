import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import translationDE from "./locales/de.json";
import translationEN from "./locales/en.json";
import i18next from 'i18next';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
