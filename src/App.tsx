import { useEffect, useRef, useState } from 'react';
import './App.scss';
import AboutMePage from './components/Pages/AboutMePage/AboutMePage';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import SkillsPage from './components/Pages/SkillsPage/SkillsPage';
import { Maximize } from '@mui/icons-material';
import ProjectsPage from './components/Pages/ProjectsPage/ProjectsPage';
import ProjectsPageExpandedOne from './components/Pages/ProjectsPage/ProjectsPageExpanded';
import ContactsPage from './components/Pages/ContactsPage/ContactsPage';
import MobilePage from './components/Pages/MobilePage/MobilePage';

function App() {

  const [currIndex, setCurrIndex] = useState(0)
  const [allowPageChange, setAllowPageChange] = useState(true)

  const [userOnMobile, setUserOnMobile] = useState(false)

  const landingPageRef = useRef()
  const aboutMePageRef = useRef()
  const skillPageRef = useRef()
  const projectsPageRef = useRef()
  const expandedProjectOneRef = useRef()
  const contactsPageRef = useRef()

  useEffect(() => {
    doMobileCheck()
    window.addEventListener('resize', doMobileCheck);
  }, [])

  useEffect(() => {
    doMobileCheck()
  }, [window.innerHeight, window.innerWidth])

  const doMobileCheck = () => {
    if (window.innerWidth < window.innerHeight || window.innerHeight < 600) {
      setUserOnMobile(true)
      document.body.style.overflow = 'scroll'
    } else {
      if (currIndex !== 0) changePage(0)
      setUserOnMobile(false)
      document.body.style.overflow = 'hidden'
    }
  }

  const changePage = (newIndex: number) => {
    if (userOnMobile) return
    if (!allowPageChange) return
    setAllowPageChange(false)
    const previousIndex = currIndex;
    if (newIndex === previousIndex) return;
    setCurrIndex(newIndex)

    const newPageRef: any = mapIndexToPageRef(newIndex)?.current
    const oldPageRef: any = mapIndexToPageRef(previousIndex)?.current

    const activeClass = previousIndex < newIndex ? "bottomToTopActive" : "topToBottomActive"
    const inactiveClass = previousIndex < newIndex ? "bottomToTopInActive" : "topToBottomInActive"
 
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
        return landingPageRef;
      case 1:
        return aboutMePageRef;
      case 2:
        return skillPageRef;
      case 3:
        return projectsPageRef;
      case 4:
        return expandedProjectOneRef;
      case 5:
        return contactsPageRef;
    }
  }

  const handleScroll = (event: any) => {
    const deltaY = event.deltaY
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
      <div className="App" onWheel={handleScroll}>
        {userOnMobile ? <div>
          <MobilePage changePage={changePage}/>
        </div> : 
        <div className='desktop'>
          <LandingPage ref={landingPageRef} changePage={changePage} isMobile={false}/>
          <AboutMePage ref={aboutMePageRef}/>
          <SkillsPage ref={skillPageRef}/>
          <ProjectsPage ref={projectsPageRef}/>
          <ProjectsPageExpandedOne ref={expandedProjectOneRef}/>
          <ContactsPage ref={contactsPageRef} changePage={changePage} isMobile={false}/>
        </div>}
      </div>
  );
}

export default App;
