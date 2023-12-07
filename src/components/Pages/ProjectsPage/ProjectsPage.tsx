import './style/ProjectsPage.scss'; 
import { useTranslation } from "react-i18next";
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import GuiAPI from'../../../assets/ProjectsPage/guiapi.png';
import WarframeBot from'../../../assets/ProjectsPage/warframebot.png';


const ProjectsPage = React.forwardRef(({}, ref: any) => {

    const { t } = useTranslation()

    const openInNewTab = (url: string) => {
        window.open(url, "_blank", "noreferrer")
    }

  return (
    <div ref={ref} className='inactive hidden'>
        <div className='projects-page-container'>
            <div className="header-projects">
                <div className="title-display" id='projects-header'>
                    <span className='big-text'>{t("Projects")}</span>
                </div>
            </div>

            <div className='projects-container'>
                <div className='project-display left-project'>
                    <div className='project-image-display'>
                        <img className='project-image' src={GuiAPI} onClick={() => openInNewTab("https://github.com/Skiftstar/GuiAPI-Redone")}/>
                        <div className='languages-display'>
                        </div>
                    </div>
                    <div className='project-info-display'>
                        <div className='project-title-display' onClick={() => openInNewTab("https://github.com/Skiftstar/GuiAPI-Redone")}>
                            <span className='project-title'>Minecraft GuiAPI</span>
                            <div className='window-icon'>
                                <OpenInNewIcon/>
                            </div>
                        </div>
                        <div className='project-description-display'>
                            <span className='project-description'>{t("GuiAPI Description")}</span>
                        </div>
                    </div>
                </div>

                <div className='project-display right-project'>
                    <div className='project-image-display'>
                        <img className='project-image' src={WarframeBot} onClick={() => openInNewTab("https://github.com/Skiftstar/wf-itemtracker-bot")}/>
                        <div className='languages-display'>

                        </div>
                    </div>
                    <div className='project-info-display'>
                        <div className='project-title-display' onClick={() => openInNewTab("https://github.com/Skiftstar/wf-itemtracker-bot")}>
                            <span className='project-title'>Warframe Item Tracker</span>
                            <div className='window-icon'>
                                <OpenInNewIcon/>
                            </div>
                        </div>
                        <div className='project-description-display'>
                            <span className='project-description'>{t("Warframe Item Description")}</span>
                        </div>
                    </div>
                </div>

                <div className='down-icon-project'>
                    <KeyboardArrowDownIcon/>
                </div>

            </div>

        </div>
    </div>
  );
})

export default ProjectsPage;
