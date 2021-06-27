import React from 'react';
// Styling
import styled from 'styled-components';
// Logo
import logoImage from '../assets/SmallLogo.png';

function Navbar() {
  return (
    <StyledNavbar>
      <Logo src={logoImage} alt="Page Logo" />
      <NavList>
        <li>About</li>  
        <li>Projects</li>  
        <li>Contact</li>
        <LanguageSwitch>
          <div></div>
        </LanguageSwitch>
      </NavList>
    </StyledNavbar>
  );
};

// Styled Components
const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem .1rem;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
`;

const NavList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  li{
    margin: 0 2rem;
  }
`;

const LanguageSwitch = styled.div`
  margin-left: 1rem;
  width: 45px;
  height: 20px;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 10px;
  div{
    height: 100%;
    width: 50%;
    border: 1px solid #4D8DF7;
    background-color: #4D8DF7;
    border-radius: 10px;
    position: relative;
    top: 0;
    left: 0;
  }
`;

export default Navbar;