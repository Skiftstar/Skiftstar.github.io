import './style/ProjectsPage.scss'; 
import { useTranslation } from "react-i18next";
import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import WebPage from'../../../assets/ProjectsPage/website.png';
import QuestionMark from'../../../assets/ProjectsPage/questionmark.png';

const ProjectsPageExpandedOne = React.forwardRef(({}, ref: any) => {

    const { t } = useTranslation()

    const openInNewTab = (url: string) => {
        window.open(url, "_blank", "noreferrer")
    }

  return (
    <div ref={ref} className='inactive hidden'>

        <div className='up-icon-projects'>
            <KeyboardArrowUpIcon/>
        </div>

        <div className='projects-page-container'>

            <div className='projects-container move-down'>
                <div className='project-display left-project'>
                    <div className='project-image-display'>
                        <img className='project-image' src={WebPage} onClick={() => openInNewTab("https://github.com/Skiftstar/webpage")}/>
                        <div className='languages-display'>

                        </div>
                    </div>

                    <div className='project-info-display'>
                        <div className='project-title-display' onClick={() => openInNewTab("https://github.com/Skiftstar/webpage")}>
                            <span className='project-title'>{t("Website Project")}</span>
                            <div className='window-icon'>
                                <OpenInNewIcon/>
                            </div>
                        </div>
                        <div className='project-description-display'>
                            <span className='project-description'>{t("Website Description")}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='projects-container move-down'>
                <div className='project-display right-project'>
                    <div className='project-image-display'>
                        <img className='project-image' src={QuestionMark} onClick={() => openInNewTab("https://github.com/Skiftstar")}/>
                        <div className='languages-display'>

                        </div>
                    </div>

                    <div className='project-info-display'>
                        <div className='project-title-display' onClick={() => openInNewTab("https://github.com/Skiftstar")}>
                            <span className='project-title'>{t("More Projects")}</span>
                            <div className='window-icon'>
                                <OpenInNewIcon/>
                            </div>
                        </div>
                        <div className='project-description-display'>
                            <span className='project-description'>{t("More Projects Text")}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
})

export default ProjectsPageExpandedOne;
