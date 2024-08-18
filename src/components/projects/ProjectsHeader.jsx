import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function ProjectsHeader({ text }) {
  return (
    <HeaderSection>
      <h1>{text.heading}</h1>
      <div>
        <span><FontAwesomeIcon icon={faInfoCircle}/> Info</span>
        <span><FontAwesomeIcon icon={faCodeBranch}/> Code</span>
      </div>
    </HeaderSection>
  )
};

// Styled Components
const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  h1{
    margin-bottom: 0.7rem;
    font-weight: 600;
    color: #556;
  }

  div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 1.5vw;
    border: 2px solid #ecececbe;
    border-width: 2px 0;
    padding: 1rem;
  }

  span{
    border: 1px solid #e6e6e6;
    background-color: hsl(0, 0%, 99%);
    padding: 5px 10px;
    border-radius: 12px;
    font-weight: 200;
  }

  span:nth-child(1) svg{color: var(--blueLight)}
  span:nth-child(2) svg{color: var(--orange)}
`;

export default ProjectsHeader;
