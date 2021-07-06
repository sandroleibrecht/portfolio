import React from 'react';
// Translations
import english from '../../assets/translations/about/personal_en.json';
import german from '../../assets/translations/about/personal_de.json';
// Styling
import styled from 'styled-components';
// Skill List
import skillList from '../../assets/data/SkillList.js';
// Components
import Pill from '../Pill';
// Redux
import { useSelector } from 'react-redux';

function PersonalSection() {

  const { selectedLanguage } = useSelector( state => state.language );
  const translation = selectedLanguage === 'en' ? english : german;

  return (
    <AboutDescription>
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
  );
};

// Styled Components
const AboutDescription = styled.section`
  width: 100%;
  padding: 8rem 2vw;

  .textContainer{
    margin-bottom: 4rem;
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
    opacity: .93;
    text-align: center;
    position: relative;
  }
`;

export default PersonalSection;