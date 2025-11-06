import styled from 'styled-components';
import LinkContainer from './LinkContainer';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setScrollPosition } from '../../state/projectsState';

function OtherProject( project ) {
  
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <ProjectContainer image={process.env.PUBLIC_URL + project.image}>
      <div onClick={() => {
        history.push(project.route);
        dispatch(setScrollPosition(window.scrollY));
        }
        }
        className="imageContainer"
        image={process.env.PUBLIC_URL + project.image}>
      </div>
      <div className="infoContainer">
        <h4>{project.name}</h4>
        {project.techs.map( tech => <span key={tech.name}>{tech.name}&nbsp;&nbsp;</span>)}
      </div>
      <div className="controlsContainer">
        <LinkContainer route={project.route} github={project.github} live={project.live}/>
      </div>
    </ProjectContainer>
  )
};

const ProjectContainer = styled.div`
  box-shadow: 0 0 14px 1px #e2e2e2;
  max-width: 15rem;
  min-width: 15rem;
  padding: 1rem;
  border-radius: 5px;
  transition: all .1s;

  @media (hover:hover){
    &:hover{
      transform: scale(1.05);
    }
  }

  .imageContainer{
    cursor: pointer;
    height: 7rem;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  img{
    width: 100%;
    height: auto;
  }

  .infoContainer{
    margin: 10px 0;
    text-align: center;
    span{
      font-weight: 200;
      font-size: 0.8rem;
    }
  }

  .controlsContainer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default OtherProject;
