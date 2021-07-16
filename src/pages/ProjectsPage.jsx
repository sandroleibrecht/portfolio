import React from 'react';
// Text Content
import pageText from '../assets/translations/projects.json';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import ProjectsWrapper from '../components/projects/ProjectsWrapper';
import Footer from '../components/footer/Footer';
// Scroll Top
import ScrollTop from '../assets/util/ScrollTop';
// Redux
import { useSelector } from 'react-redux';

function ProjectsPage() {

  const { selectedLanguage } = useSelector(state => state.language);
  const text = pageText[selectedLanguage];
  
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <ProjectsWrapper text={text}/>
      <Footer/>
      <ScrollTop/>
    </motion.div>
  );
};

export default ProjectsPage;