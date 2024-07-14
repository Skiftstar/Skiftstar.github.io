import { useEffect, useState } from 'react';
import './style/LanguageSelectButton.scss'; 
import { useTranslation } from "react-i18next";

function LanguageSelectButton() {

    const { i18n } = useTranslation()

    const [enActive, setENActive] = useState(true)

    useEffect(() => {
      i18n.changeLanguage(enActive ? 'en' : 'de')
    }, [enActive])


  return (
        <div className={`language-button ${enActive ? 'lang-left-active' : 'lang-right-active'}`} onClick={() => {setENActive(!enActive)}}>
            <span className='text'>EN</span>
            <span className='text'>DE</span>
        </div>
  );
}

export default LanguageSelectButton;
