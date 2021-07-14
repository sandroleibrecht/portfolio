import React from 'react';
// Styling
import styled from 'styled-components';

function ProjectsHeader({ text }) {
  return (
    <HeaderSection>
      <h1>{text.heading}</h1>
      <span>Details</span>
      <span>Codebase</span>
      <span>Live</span>
    </HeaderSection>
  )
};

// Styled Components
const HeaderSection = styled.header`
`;

export default ProjectsHeader;