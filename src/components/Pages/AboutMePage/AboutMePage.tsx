import './style/AboutMePage.scss'; 
import { useTranslation } from "react-i18next";
import ProfilePic from'../../../assets/LandingPage/pfp.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import { getAge } from '../../../util/AgeUtil';

const AboutMePage = React.forwardRef(({}, ref: any) => {
    const { t } = useTranslation()

  return (
    <div ref={ref} className='inactive hidden'>
        <div className='container-aboutme'>
            <div className="aboutme-header">
                <div className="profile-picture-wrapper-aboutme">
                    <img className='profile-picture-aboutme' src={ProfilePic}/>
                </div>
                <div className="title-display" id='aboutme-header'>
                    <span className='big-text'>{t("AboutMeHeader")}</span>
                </div>
            </div>
            <div className='about-me'>
                <span className='small-text'>{t("AboutMe").replace("{year}", `${getAge()}`)}</span>
            </div>
            
            <div className='extend-icon-aboutme'>
                <KeyboardArrowDownIcon/>
            </div>
        </div>
    </div>
  );
})

export default AboutMePage;
