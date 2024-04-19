import "./style/ProjectsPage.scss"
import { useTranslation } from "react-i18next"
import React from "react"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import WebPage from "../../../assets/ProjectsPage/website.png"
import QuestionMark from "../../../assets/ProjectsPage/questionmark.png"
import { ProjectData } from "../../../App"

const ProjectsPageExpandedOne = React.forwardRef(
  (
    {
      projects,
    }: {
      projects: ProjectData[]
    },
    ref: any
  ) => {
    const { t } = useTranslation()

    const openInNewTab = (url: string) => {
      window.open(url, "_blank", "noreferrer")
    }

    console.log("Projekte", projects)

    return (
      <div ref={ref} className="inactive hidden">
        <div className="up-icon-projects">
          <KeyboardArrowUpIcon />
        </div>

        <div className="projects-page-container">
          <div className="projects-container move-down">
            <div className="project-display left-project">
              <div className="project-image-display">
                <img
                  className="project-image"
                  src={`${process.env.PUBLIC_URL}/${projects[0].image}`}
                  onClick={() =>
                    openInNewTab(projects[0].link)
                  }
                />
                <div className="languages-display"></div>
              </div>

              <div className="project-info-display">
                <div
                  className="project-title-display"
                  onClick={() =>
                    openInNewTab(projects[0].link)
                  }
                >
                  <span className="project-title">{t(projects[0].title)}</span>
                  <div className="window-icon">
                    <OpenInNewIcon />
                  </div>
                </div>
                <div className="project-description-display">
                  <span className="project-description">
                    {t(projects[0].description)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {projects.length == 2 && (
            <div className="projects-container move-down">
              <div className="project-display right-project">
                <div className="project-image-display">
                  <img
                    className="project-image"
                    src={`${process.env.PUBLIC_URL}/${projects[1].image}`}
                    onClick={() => openInNewTab(projects[1].link)}
                  />
                  <div className="languages-display"></div>
                </div>

                <div className="project-info-display">
                  <div
                    className="project-title-display"
                    onClick={() => openInNewTab(projects[1].link)}
                  >
                    <span className="project-title">{t(projects[1].title)}</span>
                    <div className="window-icon">
                      <OpenInNewIcon />
                    </div>
                  </div>
                  <div className="project-description-display">
                    <span className="project-description">
                      {t(projects[1].description)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)

export default ProjectsPageExpandedOne
