import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import FormSection from '../components/contact/FormSection';
import Footer from '../components/footer/Footer';
// Scroll Top
import ScrollTop from '../assets/util/ScrollTop';

function ContactPage() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <FormSection/>
      <Footer/>
      <ScrollTop/>
    </motion.div>
  );
};

export default ContactPage;