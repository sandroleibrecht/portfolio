import React from 'react';
// Translations
import english from '../../translations/about/skills_en.json';
import german from '../../translations/about/skills_de.json';
// Styling & Animations
import styled from 'styled-components';
// Components
import InfoChip from '../InfoChip';
import Button from '../Button';
// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faWrench, faChevronCircleUp, faToolbox } from '@fortawesome/free-solid-svg-icons';
// Skill List
import skillList from '../../SkillList.js';
// Redux
import { useSelector } from 'react-redux';

function AboutSkills() {

  const { selectedLanguage } = useSelector( state => state.language );
  const translation = selectedLanguage === 'en' ? english : german;

  return (
    <SkillSection>
      <div>
        <div className='skillContainer'>
        <h2><FontAwesomeIcon icon={faToolbox} />Skills & Tools</h2>
          {skillList.map(( skill, i ) => (
            <InfoChip image={skill.image} text={skill.name} color={skill.color} key={skill.name + i} />
          ))}
        </div>
      </div>
      <div className='buttonContainer'>
        <Button text={translation.button_1} icon={faWrench} />
        <Button text={translation.button_2} icon={faEnvelope} />
        <Button icon={faChevronCircleUp} />
      </div>
    </SkillSection>
  );
};

// Styled Components
const SkillSection = styled.section`
  width: 100%;
  padding: 6rem 0 8rem 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 0 auto;

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

  .skillContainer{
    padding: 1rem 0;
    border: 2px solid #e6e4e46f;
    border-radius: 7px;
    max-width: 388px;
    margin: 0 .5rem;
    opacity: .93;
  }

  .buttonContainer{
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media ( max-width: 851px ){
      margin-top: 4rem;
    }
    
    button{
      margin: .5rem;
      max-width: 8rem;
      min-width: 8rem;
      height: 2.5rem;
      flex: 1;

      &:nth-child(3){
        min-width: 3rem;
        width: 3rem;
        @media ( max-width: 851px ){
          min-width: 8rem;
        }
      }
    }
  }
`;

export default AboutSkills;