import React from 'react';
// Page Text Content
import pageText from '../assets/translations/about.json';
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
// Redux
import { useSelector } from 'react-redux';

function AboutPage() {

  const { selectedLanguage } = useSelector( state => state.language );
  const { headerText, cardsText, personalText } = pageText[selectedLanguage];
  
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutHeader textContent={headerText} />
      <CardSection textContent={cardsText} />
      <Line/>
      <PersonalSection textContent={personalText} />
      <Footer/>
      <ScrollTop/>
    </motion.div>
  )
};

export default AboutPage;