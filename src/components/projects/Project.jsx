import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCode, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// Utils
import OpenNewTab from '../../assets/util/OpenNewTab';
// Router
import { useHistory } from 'react-router-dom';
// Components
import Pill from '../Pill';

function Project( project ) {

  const history = useHistory();

  return (
    <ProjectContainer>
      <div className="projectHead">
        <h1>{project.name}</h1>
        <div className="linkContainer">
          <span onClick={() => history.push(project.route)}  ><FontAwesomeIcon icon={faInfoCircle}/></span>
          <span onClick={() => OpenNewTab(project.github)} ><FontAwesomeIcon icon={faCode}/></span>
          { project.live ? 
            <span onClick={() => OpenNewTab(project.live)} ><FontAwesomeIcon icon={faPlayCircle}/></span>
            :
            null
          }
        </div>
      </div>
      <img src={process.env.PUBLIC_URL + project.image} alt={project.name + ' main image'} />
      <div className="techContainer">
          { project.techs.map( tech => <Pill key={tech.name+'_pill'} text={tech.name} color={tech.color}/>) }
      </div>
    </ProjectContainer>
  )
}

// Styled Components
const ProjectContainer = styled.div`
  margin-bottom: 8rem;
  box-shadow: 0 0 15px 1px #e7e7e7;
  border-radius: 12px;
  padding: 1rem;

  .projectHead{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    @media ( max-width: 380px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    h1{
      color: #555;
      font-weight: 600;
      font-size: 1.3rem;
      flex: 1;
    }
  }
  .linkContainer{
    border-radius: 12px;
    box-shadow: inset 0 0 5px 1px #e9e9e9;
    padding: .2rem .5rem;

    span{
      font-size: 1.15rem;
      margin: 0 .5rem;
      cursor: pointer;
      &:nth-child(1){ color: var(--blueLight);}
      &:nth-child(2){ color: var(--orange);}
      &:nth-child(3){ color: var(--green);}

      svg{
        transition: all .2s;
        opacity: .75;
      }
      @media (hover:hover){
        & svg:hover{
          opacity: 1;
          transform: translateY(-2px);
        }
      }
    }
  }
  
  img{
    max-width: 40rem;
    width: 100%;
    height: auto;
    min-height: 15rem;
    object-fit: cover;
  }


  .techContainer{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    padding: 10px 5px;
    border: 1px solid #e6e6e6;
    border-width: 1px 0;
    background-color: hsl(0, 0%, 99%);
  }
`;

export default Project;