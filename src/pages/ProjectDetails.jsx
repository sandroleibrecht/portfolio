import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import Footer from '../components/footer/Footer';
// Scroll Top
import ScrollTop from '../assets/util/ScrollTop';

function ProjectDetails() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      Project Details
      <Footer/>
      <ScrollTop/>
    </motion.div>
  );
};

export default ProjectDetails;