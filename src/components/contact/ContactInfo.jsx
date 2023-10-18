import React from 'react';
// Styling
import styled from 'styled-components';

function ContactInfo({ infoText }) {

  return (
    <InfoWrapper>
      <div className="textSection">
        <h1>{infoText.heading}</h1>
        <p id='info1'>{infoText.info1}</p>
        <p id='info2'>{infoText.info2}</p>
      </div>
    </InfoWrapper>
  );
};

// Styled Components
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 12px;
  padding: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  margin: 0 .5rem;
  margin-bottom: .5rem;
  
  @media ( max-width: 836px){
    align-items: center;
  }

  .textSection{
    max-width: 400px;
    h1{
      margin-bottom: .6rem;
      padding-bottom: .6rem;
      font-weight: 600;
      color: #556;
      border-bottom: 2px solid #e4e4e4;
    }

    #info1, #info2{
      color: #706e6e;
      font-size: .95rem;
    }

    #info2{
      margin-top: 8px;
      margin-bottom: 2rem;
    }
  }
`;

export default ContactInfo;
