import React from 'react';
// Styling
import styled from 'styled-components';
// Skill List
import skillList from '../../assets/data/SkillList.js';
// Components
import Pill from '../Pill';

function PersonalSection({ textContent }) {

  const spotlightSkills = skillList.filter( skill => skill.spotlight);

  return (
    <AboutDescription>
      <div className="textContainer">
        <p>
          {textContent[0]}<br/>
          {textContent[1]}<br/>
          {textContent[2]}<br/>
          {textContent[3]}<br/>
          {textContent[4]}
        </p>
      </div>
      <div className='skillContainer'>
        {spotlightSkills.map(( skill, i ) => (
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