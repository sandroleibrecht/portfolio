import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../GlobalStyles';
// Components
import AboutHeader from '../components/about/AboutHeader';
import AboutInfo from '../components/about/AboutInfo';
import AboutSkills from '../components/about/AboutSkills';

function AboutPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutHeader/>
      <AboutInfo/>
      <AboutSkills/>
    </motion.div>
  )
};

export default AboutPage;