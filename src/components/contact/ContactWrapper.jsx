import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function ContactWrapper({ infoText, formText }) {
  return (
    <ContactSection>
      <div className='formWrapper'>
        <ContactInfo infoText={infoText} />
        <ContactForm formText={formText} />
      </div>
    </ContactSection>
  );
};

// Styled Components
const ContactSection = styled.section`
  min-height: calc(100vh - 66px - 128px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .formWrapper{
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1rem;
    width: 70%;
    max-width: 900px;
  }
`;

export default ContactWrapper;