import { ContactPage } from '@mui/icons-material';
import ContactDisplay from '../../Components/ContactDisplay/ContactDisplay';
import AboutMePage from '../AboutMePage/AboutMePage';
import LandingPage from '../LandingPage/LandingPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ProjectsPageExpandedOne from '../ProjectsPage/ProjectsPageExpanded';
import SkillsPage from '../SkillsPage/SkillsPage';
import './style/MobilePage.scss'; 
import ContactsPage from '../ContactsPage/ContactsPage';

interface MobilePageProps {
    changePage: Function
}

const MobilePage = (props: MobilePageProps) => {

  return (
    <div className='mobile-page-container mobile'>
        <LandingPage changePage={props.changePage} isMobile={true}/>
        <AboutMePage/>
        <SkillsPage/>
        <ProjectsPage/>
        <ProjectsPageExpandedOne/>
        <ContactsPage changePage={props.changePage} isMobile={true}/>
    </div>
  );
}

export default MobilePage;
