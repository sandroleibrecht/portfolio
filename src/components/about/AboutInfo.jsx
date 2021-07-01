import React from 'react';
// Styling & Animations
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faBook } from '@fortawesome/free-solid-svg-icons';

function AboutInfo() {
  return (
    <InfoContainer>
      <CardContainer>
        <Card>
          <FontAwesomeIcon icon={faLaptopCode} />
          <h4>Frontend</h4>
          <p>Focused on Frontend Development and primarily working with JavaScript and React</p>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card>
          <FontAwesomeIcon icon={faServer} />
          <h4>Backend</h4>
          <p>While building out Full Stack Applications i gained good knowledge of working with API's and Databases</p>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card>
          <FontAwesomeIcon icon={faBook} />
          <h4>Improvement</h4>
          <p>I especially enjoy learning and improving myself, to make life easier for myself and everyone around me</p>
        </Card>
      </CardContainer>
    </InfoContainer>
  );
};

// Styled Components
const InfoContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 2vw;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Card = styled.div`
  max-width: 20rem;
  min-width: 260px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 0 14px -5px #a39f9fa9;

  svg{
    font-size: 5rem;
    color: #fff;
    padding: .7rem;
    border-radius: 20px;
    background-color: var(--primary);
  }

  h4{
    margin: 1rem 0;
  }

  p{
    line-height: 1.5rem;
    font-weight: 400;
  }
`;

export default AboutInfo;