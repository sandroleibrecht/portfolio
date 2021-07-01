import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../GlobalStyles';
// Components
import AboutHeader from '../components/AboutHeader';
import AboutInfo from '../components/AboutInfo';

function AboutPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutHeader/>
      <AboutInfo/>
    </motion.div>
  )
};

export default AboutPage;