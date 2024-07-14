import { useEffect, useState } from "react"
import "./style/LanguageSelectButton.scss"
import { useTranslation } from "react-i18next"

function LanguageSelectButton() {
  const { i18n } = useTranslation()

  const [enActive, setENActive] = useState(true)
  const [proActive, setProActive] = useState(true)

  useEffect(() => {
    let language = enActive ? "en" : "de"
    if (proActive) language += "Professional"
    i18n.changeLanguage(language)
  }, [enActive, proActive])

  return (
    <div className="language-button-wrapper">
      <div
        className={`language-button ${
          enActive ? "lang-left-active" : "lang-right-active"
        }`}
        onClick={() => {
          setENActive(!enActive)
        }}
      >
        <span className="text">EN</span>
        <span className="text">DE</span>
      </div>

      <div
        className={`language-button ${
          proActive ? "lang-left-active" : "lang-right-active"
        }`}
        onClick={() => {
          setProActive(!proActive)
        }}
      >
        <span className="text">PRO</span>
        <span className="text">CAS</span>
      </div>
    </div>
  )
}

export default LanguageSelectButton
