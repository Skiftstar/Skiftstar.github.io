import "./style/ProjectsPage.scss"
import { useTranslation } from "react-i18next"
import React from "react"
import { ProjectData } from "../../util/ProjectLoader"
import DuoProjectDisplay from "../../components/DuoProjectDisplay/DuoProjectDisplay"

const ProjectsPage = React.forwardRef(
  (
    {
      projects,
    }: {
      projects: ProjectData[]
    },
    ref: any
  ) => {
    const { t } = useTranslation()

    return (
      <div ref={ref} className="inactive hidden">
        <div className="projects-page-container">
          <div className="header-projects">
            <div className="title-display" id="projects-header">
              <span className="big-text">{t("Projects")}</span>
            </div>
          </div>

          <div className="projects-container">
            <DuoProjectDisplay projects={projects} />
          </div>
        </div>
      </div>
    )
  }
)

export default ProjectsPage
