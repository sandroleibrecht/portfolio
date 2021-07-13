import React from 'react';
// Styling
import styled from 'styled-components';

function Project( project ) {
  // Klick auf details speichert project prop in state ( muss implementiert werden )
  return (
    <ProjectContainer>
      project
    </ProjectContainer>
  )
}

// Styled Components
const ProjectContainer = styled.div`
  margin: 3rem 0;
`;

export default Project;