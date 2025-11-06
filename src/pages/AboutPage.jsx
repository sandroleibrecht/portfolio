import { useEffect } from 'react';
import pageText from '../assets/translations/about.json';
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
import AboutHeader from '../components/about/AboutHeader';
import CardSection from '../components/about/CardSection';
import Line from '../components/Line';
import PersonalSection from '../components/about/PersonalSection';
import Footer from '../components/footer/Footer';
import ScrollTop from '../assets/util/ScrollTop';
import { useSelector, useDispatch } from 'react-redux';
import {setScrollPosition} from '../state/projectsState';

function AboutPage() {

  const dispatch = useDispatch();

  const { selectedLanguage } = useSelector( state => state.language );
  const { headerText, cardsText, personal } = pageText[selectedLanguage];
  
  useEffect( () => {
    dispatch(setScrollPosition(0));
  },[dispatch]);

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutHeader textContent={headerText} />
      <CardSection textContent={cardsText} />
      <Line/>
      <PersonalSection textContent={personal} />
      <Footer/>
      <ScrollTop/>
    </motion.div>
  )
};

export default AboutPage;
