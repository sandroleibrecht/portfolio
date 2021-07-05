import React from 'react';
// Styling & Animations
import styled from 'styled-components';
// Components
import InfoChip from '../InfoChip';
import Button from '../Button';
// Font Awesome Icons
import { faEnvelope, faWrench, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
// Skill List
import skillList from '../../SkillList.js';

function AboutSkills() {
  return (
    <SkillSection>
      <div>
        <h2>Tools I Use And Improve On</h2>
        <div className='skillContainer'>
          {skillList.map(( skill, i ) => (
            <InfoChip image={skill.image} text={skill.name} color={skill.color} key={skill.name + i} />
          ))}
        </div>
      </div>
      <div className='buttonContainer'>
        <Button text='Projects' icon={faWrench} />
        <Button text='Contact' icon={faEnvelope} />
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
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  .skillContainer{
    padding: 1rem 0;
    box-shadow: 0 0 14px -5px #aca9a9a9;
    max-width: 388px;
    margin: 0 .5rem;
  }

  .buttonContainer{
    margin-top: 2rem;
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