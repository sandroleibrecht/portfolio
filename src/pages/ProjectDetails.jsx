import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import TopBar from '../components/projectDetails/TopBar';
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
  // wenn project show project wrapper
  // wenn nicht dann sorry screen

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <TopBar projectName={currentProject.name}/>
      <ScrollTop/>
    </motion.div>
  );
};

export default ProjectDetails;