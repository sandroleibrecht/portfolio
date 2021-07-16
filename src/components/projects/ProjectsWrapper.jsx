import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import ProjectsHeader from './ProjectsHeader'
import ProjectList from './ProjectList';

function ProjectsWrapper({ text }) {
  return (
    <ProjectsSection>
      <ProjectsHeader text={text.header} />
      <ProjectList text={text.other}/>
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