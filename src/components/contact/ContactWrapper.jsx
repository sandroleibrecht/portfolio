import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import ContactForm from './ContactForm';

function ContactWrapper() {
  return (
    <ContactSection>
      <ContactForm/>
    </ContactSection>
  );
};

// Styled Components
const ContactSection = styled.section`
  min-height: calc(100vh - 66px - 128px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ContactWrapper;