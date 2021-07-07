import React from 'react';
// Styling
import styled from 'styled-components';

function ContactInfo({ infoText }) {
  return (
    <InfoWrapper>
      <h3>Info Text</h3>
      <p>Comes here</p>
    </InfoWrapper>
  );
};

// Styled Components
const InfoWrapper = styled.div`
  width: 50%;
`;

export default ContactInfo;