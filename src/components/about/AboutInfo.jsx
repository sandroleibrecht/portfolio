import React from 'react';
// Translations
import english from '../../translations/about/info_en.json';
import german from '../../translations/about/info_de.json';
// Styling & Animations
import styled from 'styled-components';
// Font Awesome
import { faLaptopCode, faServer, faBook } from '@fortawesome/free-solid-svg-icons';
// Card Component
import AboutCard from './AboutCard';
// Redux
import { useSelector } from 'react-redux';

function AboutInfo() {

  const { selectedLanguage } = useSelector( state => state.language );
  const translation = selectedLanguage === 'en' ? english : german;

  const cardContent = [
    {
      icon: faLaptopCode,
      heading: translation[0].heading,
      body: translation[0].body
    },
    {
      icon: faServer,
      heading: translation[1].heading,
      body: translation[1].body
    },
    {
      icon: faBook,
      heading: translation[2].heading,
      body: translation[2].body
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
  padding: 5vw 2vw;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  &:nth-child(1){
    svg{
      color: var(--primary);
      background-color: #ecececba;
    }
  }
  &:nth-child(2){
    svg{
      color: #F4B400;
      background-color: #ecececba;
    }
  }
  &:nth-child(3){
    svg{
      color: #42b426;
      background-color: #ecececba;
    }
  }
`;

export default AboutInfo;