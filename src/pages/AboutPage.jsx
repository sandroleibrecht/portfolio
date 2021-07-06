import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import AboutHeader from '../components/about/AboutHeader';
import AboutInfo from '../components/about/AboutInfo';
import Footer from '../components/footer/Footer';

function AboutPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutHeader/>
      <AboutInfo/>
      <Footer/>
    </motion.div>
  )
};

export default AboutPage;