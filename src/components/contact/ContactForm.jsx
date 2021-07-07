import React from 'react';
// Styling
import styled from 'styled-components';

function ContactForm({ formText }) {
  return (
    <Form>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name"/>
    </Form>
  );
};

// Styled Components
const Form = styled.form`

`;

export default ContactForm;