import React from 'react';
// Styling
import styled from 'styled-components';
// Project Component
import Project from './Project';

function ProjectsWrapper({ text }) {
  return (
    <ProjectsSection>
      <Project/>
      <Project/>
    </ProjectsSection>
  )
};

// Styled Components
const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
`;

export default ProjectsWrapper;