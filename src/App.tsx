import { createRef, useEffect, useRef, useState } from "react"
import "./App.scss"
import AboutMePage from "./pages/AboutMePage/AboutMePage"
import LandingPage from "./pages/LandingPage/LandingPage"
import SkillsPage from "./pages/SkillsPage/SkillsPage"
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage"
import ProjectsPageExpandedOne from "./pages/ProjectsPage/ProjectsPageExpanded"
import ContactsPage from "./pages/ContactsPage/ContactsPage"
import MobilePage from "./pages/MobilePage/MobilePage"
import DotPagePreview from "./components/DotPagePreview/DotPagePreview"
import { getProjects, ProjectData } from "./util/ProjectLoader"

function App() {
  const [currIndex, setCurrIndex] = useState(0)
  const [allowPageChange, setAllowPageChange] = useState(true)
  const [pageDotHidden, setPageDotHidden] = useState(true)
  const [pageDotFading, setPageDotFading] = useState(false)

  const [userOnMobile, setUserOnMobile] = useState(false)

  const landingPageRef = useRef()
  const aboutMePageRef = useRef()
  const skillPageRef = useRef()
  const projectsPageRef = useRef()
  const contactsPageRef = useRef()
  const projectPageRefs: any = useRef([])

  const { projects, projectPages } = getProjects()

  // 4 is the number of pages before the project pages
  // then add the number of project pages we have to get total number of pages
  const amountOfPages = 4 + projectPages.length

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

    const newPageRef: any = mapIndexToPageRef(newIndex, true)?.current
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

  const hidePageDot = () => {
    if (pageDotHidden) return
    setPageDotFading(true)
    setTimeout(() => {
      setPageDotFading(false)
      setPageDotHidden(true)
    }, 250)
  }

  const mapIndexToPageRef = (index: number, changeState?: boolean) => {
    if (index > 0) setPageDotHidden(false)
    switch (index) {
      case 0:
        if (changeState) hidePageDot()
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
          return projectPageRefs.current[newIndex] // access the array directly
        } else {
          return contactsPageRef
        }
    }
  }

  const handleScroll = (event: any) => {
    const deltaY = event.deltaY
    const scrollUp = deltaY < 0

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
      if (currIndex < amountOfPages) {
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
          <MobilePage changePage={changePage} projects={projects} />
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
          {!pageDotHidden && (
            <div className="dot-page-preview">
              <DotPagePreview
                numPages={amountOfPages}
                activePage={currIndex - 1}
                fading={pageDotFading}
                changePage={changePage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
