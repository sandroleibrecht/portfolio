import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../GlobalStyles';

function ProjectsPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      Projects Page  
    </motion.div>
  );
};

export default ProjectsPage;