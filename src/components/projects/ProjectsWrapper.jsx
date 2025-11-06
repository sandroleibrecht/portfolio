import styled from 'styled-components';
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

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.5rem 1rem;
`;

export default ProjectsWrapper;
