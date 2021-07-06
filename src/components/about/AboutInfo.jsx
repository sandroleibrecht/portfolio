import React from 'react';
// Translations
import english from '../../translations/about/info_en.json';
import german from '../../translations/about/info_de.json';
// Styling & Animations
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faBook, faBolt, faAtom, faCodeBranch, faToolbox } from '@fortawesome/free-solid-svg-icons';
// Components
import AboutCard from './AboutCard';
import InfoChip from '../InfoChip';
// Skill List
import skillList from '../../SkillList.js';
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
        <div className="textContainer">
          <p>
            {translation.personalText[0]}<br/>
            {translation.personalText[1]}<br/>
            {translation.personalText[2]}<br/>
            {translation.personalText[3]}<br/>
            {translation.personalText[4]}
          </p>
        </div>
        <div className='skillContainer'>
          <h2><FontAwesomeIcon icon={faToolbox} />Skills & Tools</h2>
          {skillList.map(( skill, i ) => (
            <InfoChip image={skill.image} text={skill.name} color={skill.color} key={skill.name + i} />
          ))}
        </div>
        <div className="iconContainer">  
          <FontAwesomeIcon icon={faBolt} />
          <FontAwesomeIcon icon={faAtom} />
          <FontAwesomeIcon icon={faCodeBranch} />
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
    svg{ color: #6295f3 }
  }
  &:nth-child(2){
    svg{ color: #F4B400 }
  }
  &:nth-child(3){
    svg{ color: #42b426 }
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

  .textContainer{
    margin-bottom: 4rem;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      font-size: 1rem;
      line-height: 1.85rem;
      padding: 0 1rem;
    }
  }

  .skillContainer{
    padding: 1rem 0;
    border: 2px solid #e6e4e46f;
    border-radius: 7px;
    max-width: 388px;
    margin: 0 auto;
    margin-bottom: 4rem;
    opacity: .93;
    text-align: center;

    h2{
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 1.3rem;
      padding: 5px 0;
      box-shadow: inset 0 0 5px -2px #a19f9fc8;

      svg{
        margin-right: 10px;
      }
    }
  }

  .iconContainer{
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    svg{
      font-size: 5rem;
      width: 70px;

      margin: 0 1rem;
      &:nth-child(1){ color: #fae20b }
      &:nth-child(2){ color: #34c6eb; margin-top: 3rem; }
      &:nth-child(3){ color: #42b426 }
    }
  }
`;

export default AboutInfo;