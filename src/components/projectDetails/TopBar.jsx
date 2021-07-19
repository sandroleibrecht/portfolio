import React from 'react';
// Style
import styled from 'styled-components';
// Components
import LanguageSwitch from '../LanguageSwitch';
import Button from '../Button';
// FontAwesome
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
// Router
import { useHistory } from 'react-router-dom';

function TopBar({ projectName, buttonText }) {

  const history = useHistory();

  return (
    <NavBar>
      <div className="leftBarContainer">
        <div onClick={() => history.push('/projects')}><Button text={buttonText} icon={faChevronCircleLeft} /></div>
        <h3>{projectName}</h3>
      </div>
      <LanguageSwitch/>
    </NavBar>
  )
};

// Styled Components
const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 20px 15px -15px #e4e4e4;
  height: 66px;
  padding: 0 2vw;
  gap: 1rem;

  .leftBarContainer{
    display: flex;
    align-items: center;
    gap: 1rem;

    h3{
      color: #444;
      font-weight: 500;
    }
  }
`;

export default TopBar;