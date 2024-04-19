import "./style/ProjectsPage.scss"
import { useTranslation } from "react-i18next"
import React from "react"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { ProjectData } from "../../../util/ProjectLoader"
import DuoProjectDisplay from "../../Components/DuoProjectDisplay/DuoProjectDisplay"

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

    return (
      <div ref={ref} className="inactive hidden">
        <div className="projects-page-container">
          <div className="move-down">
            <DuoProjectDisplay projects={projects} />
          </div>
        </div>
      </div>
    )
  }
)

export default ProjectsPageExpandedOne
