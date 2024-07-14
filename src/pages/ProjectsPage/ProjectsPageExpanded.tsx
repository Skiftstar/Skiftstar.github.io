import "./style/ProjectsPage.scss"
import React from "react"
import { ProjectData } from "../../util/ProjectLoader"
import DuoProjectDisplay from "../../components/DuoProjectDisplay/DuoProjectDisplay"

const ProjectsPageExpandedOne = React.forwardRef(
  (
    {
      projects,
    }: {
      projects: ProjectData[]
    },
    ref: any
  ) => {
    return (
      <div ref={ref} className="inactive hidden">
        <div className="projects-page-container full-height">
          <div className="full-height">
            <DuoProjectDisplay projects={projects} />
          </div>
        </div>
      </div>
    )
  }
)

export default ProjectsPageExpandedOne
