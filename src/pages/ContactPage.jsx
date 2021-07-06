import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import Footer from '../components/footer/Footer';

function ContactPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      Contact Page
      <Footer/>
    </motion.div>
  );
};

export default ContactPage;