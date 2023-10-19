import React from 'react';
// Styling
import styled from 'styled-components';
// Skill List
import skillList from '../../assets/data/SkillList.js';
// Components
import Pill from '../Pill';

function PersonalSection({ textContent }) {

  const mainSkills = skillList.filter( skill => skill.mainStack);
  const addSkills = skillList.filter( skill => skill.addStack);

  return (
    <AboutDescription>
      <div className="textContainer">
        <p>
          {textContent.text[0]}<br/>
          {textContent.text[1]}<br/>
          {textContent.text[2]}<br/>
          {textContent.text[3]}<br/>
        </p>
      </div>
      <div className='skillContainer'>
        <h3 className='mainSkillsHeading'>{textContent.skills.main}</h3>
        {mainSkills.map(( skill, i ) => (
          <Pill image={skill.image} text={skill.name} color={skill.color} key={skill.name + i} />
        ))}
        <h3 className='addSkillsHeading'>{textContent.skills.add}</h3>
        {addSkills.map(( skill, i ) => (
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

    h3{
      margin-bottom: 8px;
    }

    .addSkillsHeading{
      margin-top: 2rem;
    }
  }
`;

export default PersonalSection;
