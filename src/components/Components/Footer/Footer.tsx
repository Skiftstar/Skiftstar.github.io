import { getCurrentYear } from '../../../util/AgeUtil';
import './style/Footer.scss'; 
import { useTranslation } from "react-i18next";

interface FooterProps {
    changePage: Function,
    isMobile: boolean
}

function Footer(props: FooterProps) {

    const { t } = useTranslation()

  return (
        <div className="footer">
            <div className='copyright-display'>
                {t("FooterCopyright").replace("{year}", `${getCurrentYear()}`)}
            </div>
            <div className='back-to-top-display' onClick={() => {
                    if (props.isMobile) {
                        window.scrollTo(0,0)
                    } else {
                        props.changePage(0)
                    }
                }}>
                {t("BackToTop")}
            </div>
        </div>
  );
}

export default Footer;
