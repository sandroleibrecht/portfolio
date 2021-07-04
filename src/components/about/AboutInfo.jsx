import React from 'react';
// Translations
import english from '../../translations/about/info_en.json';
import german from '../../translations/about/info_de.json';
// Styling & Animations
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faBook, faBolt, faAtom, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
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
      heading: translation.cardContent[0].heading,
      body: translation.cardContent[0].body
    },
    {
      icon: faServer,
      heading: translation.cardContent[1].heading,
      body: translation.cardContent[1].body
    },
    {
      icon: faBook,
      heading: translation.cardContent[2].heading,
      body: translation.cardContent[2].body
    }
  ]

  return (
    <InfoContainer>
      {cardContent.map( (card, i) => (
        <CardContainer key={card.heading+i}>
          <AboutCard icon={card.icon} heading={card.heading} body={card.body}/>
        </CardContainer>
      ))}
      <AboutDescription>
        <Line/>
        <div>
          <p>
            {translation.personalText[0]}<br/>
            {translation.personalText[1]}<br/>
            {translation.personalText[2]}<br/>
            {translation.personalText[3]}<br/>
            {translation.personalText[4]}
          </p>
        </div>
        <div>  
          <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faAtom}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
        </div>
      </AboutDescription>
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
  padding: 5.5rem 2vw;
  box-shadow: inset 0px -11px 30px -12px #E3E3E3;
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
      color: #6295f3;
    }
  }
  &:nth-child(2){
    svg{
      color: #F4B400;
    }
  }
  &:nth-child(3){
    svg{
      color: #42b426;
    }
  }
`;

const Line = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 2px;
  background-color: #cccccc6c;
`;

const AboutDescription = styled.section`
  min-width: 100%;
  margin-top: 5vw;

  p{
    font-size: 1rem;
    line-height: 1.85rem;
    padding: 0 1rem;
  }

  svg{
    font-size: 5rem;
    margin: 0 1rem;

    &:nth-child(1){
      color: #fae20b;
    }
    &:nth-child(2){
      color: #34c6eb;
      margin-top: 3rem;
    }
    &:nth-child(3){
      color: #42b426;
    }
  }

  div:nth-child(2){
    margin-bottom: 5rem;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:nth-child(3){
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export default AboutInfo;