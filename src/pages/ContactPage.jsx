import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../GlobalStyles';

function ContactPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      Contact Page
    </motion.div>
  );
};

export default ContactPage;