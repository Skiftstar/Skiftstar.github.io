import AboutMePage from "../AboutMePage/AboutMePage"
import LandingPage from "../LandingPage/LandingPage"
import ProjectsPage from "../ProjectsPage/ProjectsPage"
import ProjectsPageExpandedOne from "../ProjectsPage/ProjectsPageExpanded"
import SkillsPage from "../SkillsPage/SkillsPage"
import "./style/MobilePage.scss"
import ContactsPage from "../ContactsPage/ContactsPage"
import { ProjectData } from "../../util/ProjectLoader"

interface MobilePageProps {
  changePage: Function
  projects: ProjectData[]
}

const MobilePage = (props: MobilePageProps) => {
  const firstProjects = props.projects.slice(0, 2)
  const restOfProjects = props.projects.slice(2)
  console.log(firstProjects)

  return (
    <div className="mobile-page-container mobile">
      <LandingPage changePage={props.changePage} isMobile={true} />
      <AboutMePage />
      <SkillsPage />
      <ProjectsPage projects={firstProjects} />
      {restOfProjects.map((project, index) => (
        <ProjectsPageExpandedOne key={index} projects={[project]} />
      ))}
      <ContactsPage changePage={props.changePage} isMobile={true} />
    </div>
  )
}

export default MobilePage
