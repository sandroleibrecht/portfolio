import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import Pill from '../Pill';

function ContactInfo({ infoText }) {

  return (
    <InfoWrapper>
      <div className="textSection">
        <h1>{infoText.heading}</h1>
        <p id='info1'>{infoText.info1}</p>
        <p id='info2'>{infoText.info2}</p>
      </div>
      <div className="pillSection">
        <Pill image="/img/app/ideas.png" text={infoText.ideas} color="var(--blue)" key="1" />
        <Pill image="/img/app/projects.png" text={infoText.projects} color="var(--blue)" key="2" />
        <Pill image="/img/app/business.png" text={infoText.business} color="var(--blue)" key="3" />
        <Pill image="/img/app/anything.png" text={infoText.anything} color="var(--blue)" key="4" />
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
  
  .textSection{
    max-width: 350px;
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
      margin-bottom: 1.3rem;
    }
  }

  .pillSection{
    text-align: center;
    position: relative;
    left: -7px;
  }

  @media (max-width: 462px){
    text-align: center;
    justify-content: center;
    align-items: center;
    .pillSection{
      left: 0;
    }
  }

`;

export default ContactInfo;
