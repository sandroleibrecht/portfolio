import React from 'react';
// Styling
import styled from 'styled-components';

function FormSection() {
  return (
    <FormContainer>
      <ContactForm>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
      </ContactForm>
    </FormContainer>
  );
};

// Styled Components
const FormContainer = styled.section`
  min-height: calc(100vh - 66px - 128px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactForm = styled.form`

`;

export default FormSection;