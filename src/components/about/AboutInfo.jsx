import React from 'react';
// Styling & Animations
import styled from 'styled-components';
// Font Awesome
import { faLaptopCode, faServer, faBook } from '@fortawesome/free-solid-svg-icons';
// Card Component
import AboutCard from './AboutCard';

function AboutInfo() {

  const cardContent = [
    {
      icon: faLaptopCode,
      heading: 'Frontend',
      body: 'Focused on Frontend Development and primarily working with JavaScript and React'
    },
    {
      icon: faServer,
      heading: 'Backend',
      body: 'While building out Full Stack Applications i gained good knowledge of working with API\'s and Databases'
    },
    {
      icon: faBook,
      heading: 'Improvement',
      body: 'I especially enjoy learning and improving myself, to make life easier for myself and everyone around me'
    }
  ]

  return (
    <InfoContainer>
      {cardContent.map( (card, i) => (
        <CardContainer key={card.heading+i}>
          <AboutCard icon={card.icon} heading={card.heading} body={card.body}/>
        </CardContainer>
      ))}
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

export default AboutInfo;