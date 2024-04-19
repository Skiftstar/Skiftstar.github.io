import projectsData from "../project-metadata.json"

const projectsPerPage = 2

export type ProjectData = {
    title: string
    description: string
    image: string
    link: string
  }

export const getProjects = () => {
  // Project Page Related
  const projects: ProjectData[] = projectsData
  const numOfProjectPages = Math.ceil(projects.length / projectsPerPage)
  // generate project Pages
  const projectPages: any = []
  // Start from 2 because the first two projects are displayed on a separate page
  for (let i = 2; i < projects.length; i += projectsPerPage) {
    projectPages.push(projects.slice(i, i + projectsPerPage))
  }

  return { projects, projectPages, numOfProjectPages}
}
