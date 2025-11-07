import styled from 'styled-components';
import SpotlightProject from './SpotlightProject';
import OtherProject from './OtherProject';
import Line from '../Line';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ProjectList({ text }) {
  const { projectList } = useSelector(state => state.projects);

  const spotlightProjects = [];
  const otherProjects = [];

  projectList.forEach(project => project.spotlight ? spotlightProjects.push(project) : otherProjects.push(project));

  // preload project images for detail view 
  useEffect(() => {
    projectList.forEach(project => {
      if (project.screenshots?.length) {
        project.screenshots.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      }
    });
  }, [projectList]);

  return (
    <>
      <List>
        {spotlightProjects.map(project => (
          <SpotlightProject {...project} key={project.id} />
        ))}
      </List>
      <Line />
      <OtherProjects>
        <div>
          <h3>{text.heading}</h3>
        </div>
        <div className="projectContainer">
          {otherProjects.map(project => (
            <OtherProject {...project} key={project.id} />
          ))}
        </div>
      </OtherProjects>
    </>
  );
}

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

const OtherProjects = styled.section`
  width: 100%;

  h3 {
    text-align: center;
    margin: 4rem 0;
  }

  .projectContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export default ProjectList;
