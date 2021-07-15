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
    <>
      <List>
        {projectList.map( project => <Project {...project} key={project.id} /> )}
      </List>
    </>
  )
};

// Styled Components
const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
`;

export default ProjectList;