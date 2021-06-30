import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../GlobalStyles';

function ProjectDetails() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      Project Details
    </motion.div>
  );
};

export default ProjectDetails;