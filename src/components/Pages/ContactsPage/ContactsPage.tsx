import './style/ContactsPage.scss'; 
import { useTranslation } from "react-i18next";
import React from 'react';
import ContactDisplay from '../../Components/ContactDisplay/ContactDisplay';
import Discord from'../../../assets/ContactPage/discord.png';
import Github from'../../../assets/ContactPage/github.png';
import Mail from'../../../assets/ContactPage/gmail.png';
import Footer from '../../Components/Footer/Footer';

interface ContactsPageProps {
    changePage: Function,
    isMobile: boolean
}

const ContactsPage = React.forwardRef((props: ContactsPageProps, ref: any) => {

    const { t } = useTranslation()

  return (
    <div ref={ref} className='inactive hidden'>
        <div className='container-contacts'>
            <div className="header">
                <div className="title-display" id='contact-header'>
                    <span className='big-text'>{t("Contact")}</span>
                </div>
            </div>

            <div className='contact-display-wrapper'>
                <ContactDisplay
                    img={Discord}
                    label='Discord: skifty'
                />
                <ContactDisplay
                    img={Github}
                    link='https://github.com/Skiftstar'
                    label='Github'
                />
                <ContactDisplay
                    img={Mail}
                    link='mailto:yukamitft@gmail.com'
                    label='E-Mail'
                />
            </div>
        </div>

        <Footer
            changePage={props.changePage}
            isMobile={props.isMobile}
        />
    </div>
  );
})

export default ContactsPage;
