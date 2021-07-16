import React, {useEffect} from 'react';
// Text Content
import pageText from '../assets/translations/projects.json';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import ProjectsWrapper from '../components/projects/ProjectsWrapper';
import Footer from '../components/footer/Footer';
// Scroll Top
import ScrollTop from '../assets/util/ScrollTop';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setScrollPosition } from '../state/projectsState';

function ProjectsPage() {

  const dispatch = useDispatch();

  const { selectedLanguage } = useSelector(state => state.language);
  const text = pageText[selectedLanguage];
  
  const { scrollPosition } = useSelector(state => state.projects);
  useEffect(() => {
    dispatch(setScrollPosition(0));
  }, [dispatch])

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <ProjectsWrapper text={text}/>
      <Footer/>
      <ScrollTop scrollTo={scrollPosition}/>
    </motion.div>
  );
};

export default ProjectsPage;