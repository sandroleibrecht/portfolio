import pageText from '../assets/translations/projects.json';
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
import ProjectsWrapper from '../components/projects/ProjectsWrapper';
import Footer from '../components/footer/Footer';
import ScrollTop from '../assets/util/ScrollTop';
import { useSelector } from 'react-redux';

function ProjectsPage() {

  const { selectedLanguage } = useSelector(state => state.language);
  const text = pageText[selectedLanguage];
  
  const { scrollPosition } = useSelector(state => state.projects);

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <ProjectsWrapper text={text}/>
      <Footer/>
      <ScrollTop scrollTo={scrollPosition}/>
    </motion.div>
  );
};

export default ProjectsPage;
