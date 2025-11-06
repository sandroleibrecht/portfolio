import pageText from '../assets/translations/details.json';
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
import TopBar from '../components/projectDetails/TopBar';
import ProjectsSection from '../components/projectDetails/ProjectSection';
import Footer from '../components/footer/Footer';
import PageNotFound from './404';
import ScrollTop from '../assets/util/ScrollTop';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProjectDetails() {
  
  const { selectedLanguage } = useSelector(state => state.language);
  const { topButton } = pageText[selectedLanguage];

  // Get Project
  const { projectList } = useSelector(state => state.projects);
  const { pathname } = useLocation();
  const currentProject = projectList.find( project => project.id === pathname.split('/')[2]);

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      { currentProject ?
        <>
          <TopBar projectName={currentProject.name} buttonText={topButton}/>
          <ProjectsSection {...currentProject} desc={currentProject.desc[selectedLanguage]}/>
        </>
        :
        <>
          <PageNotFound/>
        </>
      }
      <Footer/>
      <ScrollTop/>
    </motion.div>
  );
};

export default ProjectDetails;
