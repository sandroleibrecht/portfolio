import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function ContactWrapper({ infoText, formText }) {
  return (
    <ContactSection>
      <ContactInfo infoText={infoText} />
      <ContactForm formText={formText} />
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