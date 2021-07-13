import React from 'react';
// Styling
import styled from 'styled-components';

function ProjectsHeader({ text }) {
  return (
    <HeaderSection>
      <h1>{text.heading}</h1>
      <span>{text.info1}</span>
      <span>{text.info2}</span>
      <span>{text.info3}</span>
    </HeaderSection>
  )
};

// Styled Components
const HeaderSection = styled.header`
`;

export default ProjectsHeader;