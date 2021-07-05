import React from 'react';
// Styling & Animations
import styled from 'styled-components';
// Chip Component
import SkillChip from './AboutSkillChip';
// Skill List
import skillList from '../../SkillList.js';

function AboutSkills() {
  return (
    <SkillSection>
      <h2>Tools I Use And Improve On</h2>
      <div>
        {skillList.map(( skill, i ) => (
          <SkillChip image={skill.image} text={skill.name} color={skill.color} key={skill.name + i} />
        ))}
      </div>
    </SkillSection>
  );
};

// Styled Components
const SkillSection = styled.section`
  padding: 5rem 0;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AboutSkills;