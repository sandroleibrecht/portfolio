import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../GlobalStyles';
// Components
import AboutHeader from '../components/AboutHeader';

function AboutPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutHeader/>
    </motion.div>
  )
};

export default AboutPage;