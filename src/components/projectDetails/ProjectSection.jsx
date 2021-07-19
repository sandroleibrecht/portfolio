import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// Components
import Pill from '../Pill';
// Utils
import OpenNewTab from '../../assets/util/OpenNewTab';

function ProjectSection( project ) {  // name, desc, techs, image, screenshots, github, live
  return (
    <MainWrapper>
      <div className="headWrapper">
        <img src={project.image} alt={project.name} className="mainImage"/>
        <div className="techsContainer">
          {project.techs.map( tech => <Pill image={tech.image} text={tech.name} color={tech.color} key={tech.name}/>)}
        </div>
        <div className="linksContainer">
          <span onClick={() => OpenNewTab(project.github)}><FontAwesomeIcon icon={faCode}/> Code</span>
          { project.live && <span onClick={() => OpenNewTab(project.live)}><FontAwesomeIcon icon={faPlayCircle}/> Live</span>}
        </div>
      </div>
      <div className="projectDetails">
        {project.desc}
      </div>
    </MainWrapper>
  )
};

// Styled Components
const MainWrapper = styled.main`
  padding-top: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .headWrapper{
    margin: 3rem 0;
    width: 100%;
    max-width: 600px;
    padding: 1rem;
  }

  .mainImage{
    width: 100%;
    margin-bottom: 1rem;
  }

  .techsContainer{
    border: 2px solid #ecececbe;
    padding: 1rem;
    border-width: 2px 0;
    margin-top: 1rem;
    text-align: center;
  }
  
  .linksContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 1.5vw;
    margin-top: 1.5rem;

    span{
      border: 1px solid #e6e6e6;
      background-color: hsl(0, 0%, 99%);
      text-align: center;
      width: 5.4rem;
      padding: 5px 10px;
      border-radius: 12px;
      font-weight: 200;
      cursor: pointer;
      transition: all .2s;

      @media (hover:hover){
        &:hover{
          background-color: hsl(0, 0%, 96%);
        }
      }

      &:nth-child(1) svg{color: var(--orange)}
      &:nth-child(2) svg{color: var(--green)}
    }
  }

  .projectDetails{
    box-shadow: 0px -9px 15px -7px #d1cfcf;
    width: 100%;
  }
`;

export default ProjectSection;