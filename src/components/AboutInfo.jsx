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
          <p>Texttexttext</p>
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
  min-width: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;

  h4{}

  p{}

  svg{
    font-size: 5rem;
    color: #444242;
    margin: 1rem 0;
  }
`;

export default AboutInfo;