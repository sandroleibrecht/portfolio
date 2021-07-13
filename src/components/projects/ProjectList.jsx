import React from 'react';
// Styling
import styled from 'styled-components';
// Project Component
import Project from './Project';

function ProjectList() {
  return (
    <List>
      <Project/>
    </List>
  )
};

// Styled Components
const List = styled.section`
`;

export default ProjectList;