import React from 'react';
// Translations
import english from '../../translations/about/info_en.json';
import german from '../../translations/about/info_de.json';
// Styling & Animations
import styled from 'styled-components';
// Font Awesome
import { faLaptopCode, faServer, faBook } from '@fortawesome/free-solid-svg-icons';
// Components
// import AboutCard from './AboutCard';
import Card from '../Card';
import Pill from '../Pill';
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
      body: translation.cardContent[0].body,
      iconColor: 'var(--primary)'
    },
    {
      icon: faServer,
      heading: translation.cardContent[1].heading,
      body: translation.cardContent[1].body,
      iconColor: 'var(--orange)'
    },
    {
      icon: faBook,
      heading: translation.cardContent[2].heading,
      body: translation.cardContent[2].body,
      iconColor: 'var(--green)'
    }
  ]

  return (
    <InfoContainer>
      {cardContent.map( (card, i) => (
        <CardContainer key={card.heading+i}>
          <Card icon={card.icon} heading={card.heading} body={card.body} iconColor={card.iconColor} />
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
          {skillList.map(( skill, i ) => (
            <Pill image={skill.image} text={skill.name} color={skill.color} key={skill.name + i} />
          ))}
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
      text-align: center;
    }
  }

  .skillContainer{
    padding: 1rem 0;
    border-width: 2px 0;
    border-style: solid;
    border-color: #e6e4e46f;
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 4rem;
    opacity: .93;
    text-align: center;
    position: relative;
  }
`;

export default AboutInfo;