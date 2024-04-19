import { createRef, useEffect, useRef, useState } from "react"
import "./App.scss"
import AboutMePage from "./components/Pages/AboutMePage/AboutMePage"
import LandingPage from "./components/Pages/LandingPage/LandingPage"
import SkillsPage from "./components/Pages/SkillsPage/SkillsPage"
import ProjectsPage from "./components/Pages/ProjectsPage/ProjectsPage"
import ProjectsPageExpandedOne from "./components/Pages/ProjectsPage/ProjectsPageExpanded"
import ContactsPage from "./components/Pages/ContactsPage/ContactsPage"
import MobilePage from "./components/Pages/MobilePage/MobilePage"
import projectsData from "./project-metadata.json"

export type ProjectData = {
  title: string
  description: string
  image: string
  link: string
}

function App() {
  const [currIndex, setCurrIndex] = useState(0)
  const [allowPageChange, setAllowPageChange] = useState(true)

  const [userOnMobile, setUserOnMobile] = useState(false)

  const landingPageRef = useRef()
  const aboutMePageRef = useRef()
  const skillPageRef = useRef()
  const projectsPageRef = useRef()
  const contactsPageRef = useRef()

  // Project Page Related
  const projects: ProjectData[] = projectsData
  const projectsPerPage = 2
  // generate project Pages
  const projectPages: any = []
  const projectPageRefs: any = useRef([])
  // Start from 2 because the first two projects are displayed on a separate page
  for (let i = 2; i < projects.length; i += projectsPerPage) {
    projectPages.push(projects.slice(i, i + projectsPerPage))
  }

  // Create refs for the project pages
  useEffect(() => {
    projectPageRefs.current = projectPages.map(
      (_: any, i: number) => projectPageRefs.current[i] ?? createRef()
    )
    console.log(projectPages)
  }, [projectPages])

  useEffect(() => {
    doMobileCheck()
    window.addEventListener("resize", doMobileCheck)
  }, [])

  useEffect(() => {
    doMobileCheck()
  }, [window.innerHeight, window.innerWidth])

  const doMobileCheck = () => {
    if (window.innerWidth < window.innerHeight || window.innerHeight < 600) {
      setUserOnMobile(true)
      document.body.style.overflow = "scroll"
    } else {
      if (currIndex !== 0) changePage(0)
      setUserOnMobile(false)
      document.body.style.overflow = "hidden"
    }
  }

  const changePage = (newIndex: number) => {
    if (userOnMobile) return
    if (!allowPageChange) return

    // if Index -1 then go to the last page
    if (newIndex === -1) {
      // 4 is the number of pages before the project pages
      // then add the number of project pages we have to get the last index
      newIndex = 4 + projectPages.length
    }
    setAllowPageChange(false)
    const previousIndex = currIndex
    if (newIndex === previousIndex) return
    setCurrIndex(newIndex)

    const newPageRef: any = mapIndexToPageRef(newIndex)?.current
    const oldPageRef: any = mapIndexToPageRef(previousIndex)?.current

    const activeClass =
      previousIndex < newIndex ? "bottomToTopActive" : "topToBottomActive"
    const inactiveClass =
      previousIndex < newIndex ? "bottomToTopInActive" : "topToBottomInActive"

    if (newPageRef) {
      newPageRef.className = `page ${activeClass}`
    }

    if (oldPageRef) {
      oldPageRef.className = `page ${inactiveClass}`
    }

    setTimeout(() => {
      setAllowPageChange(true)
      oldPageRef.className = `page ${inactiveClass} hidden`
    }, 500)
  }

  const mapIndexToPageRef = (index: number) => {
    switch (index) {
      case 0:
        return landingPageRef
      case 1:
        return aboutMePageRef
      case 2:
        return skillPageRef
      case 3:
        return projectsPageRef
      default:
        // At this point, it's gonna be a project page or the contact page
        // So we need to subtract 4 from the index so we can check if it's greater than the length
        // of project pages we have
        const newIndex = index - 4
        if (newIndex < projectPages.length) {
          console.log(newIndex, projectPageRefs.current[newIndex])
          return projectPageRefs.current[newIndex] // access the array directly
        } else {
          return contactsPageRef
        }
    }
  }

  const handleScroll = (event: any) => {
    const deltaY = event.deltaY
    const scrollUp = deltaY < 0

    // 4 is the number of pages before the project pages
    // then add the number of project pages we have to get total number of pages
    const amountOfPages = 4 + projectPages.length

    // Check index boundaries each time to prevent going out of bounds
    if (scrollUp) {
      if (currIndex > 0) {
        changePage(currIndex - 1)
      }
    } else {
      if (currIndex < amountOfPages) {
        changePage(currIndex + 1)
      }
    }
  }

  //Tracks the starting Y position of a touch event
  const [startY, setStartY] = useState(0)

  const handleTouchStart = (event: any) => {
    setStartY(event.touches[0].clientY)
  }

  //Listen to TouchMove instead of TouchEnd so that user doesn't have to lift finger to change page
  const handleTouchMove = (event: any) => {
    const endY = event.touches[0].clientY
    const deltaY = startY - endY
    const scrollUp = deltaY < 0

    if (scrollUp) {
      if (currIndex > 0) {
        changePage(currIndex - 1)
      }
    } else {
      if (currIndex < 5) {
        changePage(currIndex + 1)
      }
    }
  }

  return (
    <div
      className="App"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {userOnMobile ? (
        <div>
          <MobilePage changePage={changePage} />
        </div>
      ) : (
        <div className="desktop">
          <LandingPage
            ref={landingPageRef}
            changePage={changePage}
            isMobile={false}
          />
          <AboutMePage ref={aboutMePageRef} />
          <SkillsPage ref={skillPageRef} />
          <ProjectsPage ref={projectsPageRef} projects={projects.slice(0, 2)} />
          {projectPages.map((projects: ProjectData[], index: number) => (
            <ProjectsPageExpandedOne
              ref={projectPageRefs.current[index]} // use the ref from the array
              projects={projects}
            />
          ))}
          <ContactsPage
            ref={contactsPageRef}
            changePage={changePage}
            isMobile={false}
          />
        </div>
      )}
    </div>
  )
}

export default App
