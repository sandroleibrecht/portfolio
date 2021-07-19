import React from 'react';
// Text Content
import pageText from '../assets/translations/details.json';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import TopBar from '../components/projectDetails/TopBar';
import ProjectsSection from '../components/projectDetails/ProjectSection';
import PageNotFound from './404';
// Scroll Top
import ScrollTop from '../assets/util/ScrollTop';
// Router
import { useLocation } from 'react-router-dom';
// Redux
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
      <ScrollTop/>
    </motion.div>
  );
};

export default ProjectDetails;