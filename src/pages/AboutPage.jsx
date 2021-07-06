import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import AboutHeader from '../components/about/AboutHeader';
import CardSection from '../components/about/CardSection';
import Line from '../components/Line';
import PersonalSection from '../components/about/PersonalSection';
import Footer from '../components/footer/Footer';
// Scroll Top
import ScrollTop from '../assets/util/ScrollTop';

function AboutPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutHeader/>
      <CardSection/>
      <Line/>
      <PersonalSection/>
      <Footer/>
      <ScrollTop/>
    </motion.div>
  )
};

export default AboutPage;