import React from 'react';
// Styling
import styled from 'styled-components';
// Project Component
import Project from './Project';
// Redux
import { useSelector } from 'react-redux';

function ProjectList() {
  const {projectList} = useSelector( state => state.projects );
  return (
    <List>
      <Project {...projectList[0]} key={projectList[0].id} />
      {/* {projects.map( project => <Project {...project} key={project.id} /> )} */}
    </List>
  )
};

// Styled Components
const List = styled.section`
`;

export default ProjectList;