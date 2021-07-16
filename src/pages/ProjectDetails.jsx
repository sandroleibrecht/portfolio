import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import Footer from '../components/footer/Footer';
// Scroll Top
import ScrollTop from '../assets/util/ScrollTop';
// Router
import { useLocation } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';

function ProjectDetails() {

  // Get Project
  const { projectList } = useSelector(state => state.projects);
  const { pathname } = useLocation();
  const currentProject = projectList.find( project => project.id === pathname.split('/')[2]);

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      Project Details
      <Footer/>
      <ScrollTop/>
    </motion.div>
  );
};

export default ProjectDetails;