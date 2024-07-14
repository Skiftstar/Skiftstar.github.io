import './style/HighlightButton.scss'; 
import { useTranslation } from "react-i18next";

interface HighlightButtonProps {
    onClick: Function,
    label: string
}

function HighlightButton(props: HighlightButtonProps) {

    const { t } = useTranslation()

  return (
        <div className='highlight-button' onClick={() => {props.onClick()}}>
            <span className='text'>{t(props.label)}</span>
        </div>
  );
}

export default HighlightButton;
