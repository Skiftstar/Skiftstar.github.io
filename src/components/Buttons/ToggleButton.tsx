import { useState } from 'react';
import './style/ToggleButton.scss'; 
import { useTranslation } from "react-i18next";

interface ToggleButtonProps {
    onClick: Function,
    label: string
}

function ToggleButton(props: ToggleButtonProps) {

    const { t } = useTranslation()

    const [active, setIsActive] = useState(false)

  return (
        <div className={`toggle-button ${active ? 'toggle-button-active': 'toggle-button-inactive'}`} onClick={() => {
            setIsActive(!active)
            props.onClick()    
        }}>
            <span className='text'>{t(props.label)}</span>
        </div>
  );
}

export default ToggleButton;
