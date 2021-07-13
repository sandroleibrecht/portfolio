import React from 'react';
// Styling
import styled from 'styled-components';
// Project Component
import Project from './Project';
// Projects Data
import projects from '../../assets/data/ProjectList';

function ProjectList() {
  return (
    <List>
      {projects.map( project => <Project {...project} key={project.id} /> )}
    </List>
  )
};

// Styled Components
const List = styled.section`
`;

export default ProjectList;