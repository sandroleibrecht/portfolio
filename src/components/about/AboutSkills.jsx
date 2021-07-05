import React from 'react';
// Styling & Animations
import styled from 'styled-components';
// Chip Component
import InfoChip from '../InfoChip';
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
        <button>Projekte</button>
        <button>Contact Me</button>
      </div>
    </SkillSection>
  );
};

// Styled Components
const SkillSection = styled.section`
  width: 100%;
  padding: 5rem 0;
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
  }

  .buttonContainer{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default AboutSkills;