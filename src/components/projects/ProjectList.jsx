import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import SpotlightProject from './SpotlightProject';
import OtherProject from './OtherProject';
import Line from '../Line';
// Redux
import { useSelector } from 'react-redux';

function ProjectList() {
  const {projectList} = useSelector( state => state.projects );
  
  // Seperate Projects
  const spotlightProjects = [];
  const otherProjects = [];
  projectList.forEach( project => {
    project.spotlight ? spotlightProjects.push(project) : otherProjects.push(project);
  });

  return (
    <>
      <List>
        { spotlightProjects.map(project => <SpotlightProject {...project} key={project.id} />) }
      </List>
      <Line/>
      <OtherProjects>
        <h3>Other Projects</h3>
        { otherProjects.map(project => <OtherProject {...project} key={project.id} />) }
      </OtherProjects>
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

const OtherProjects = styled.section`

`;

export default ProjectList;