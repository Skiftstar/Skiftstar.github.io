import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import translationDE from "./locales/de.json"
import translationEN from "./locales/en.json"
import translationsENProfessional from "./locales/en-professional.json"
import translationsDEProfessional from "./locales/de-professional.json"
import i18next from "i18next"
import i18n from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"

const queryParams = new URLSearchParams(window.location.search)
const isPro = queryParams.get("style") === "pro"

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  enProfessional: {
    translation: translationsENProfessional,
  },
  deProfessional: {
    translation: translationsDEProfessional,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: isPro ? "enProfessional" : "en",
  fallbackLng: isPro ? "enProfessional" : "en",
  interpolation: {
    escapeValue: false,
  },
})

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
