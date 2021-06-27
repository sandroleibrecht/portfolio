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
          <h6>DE</h6>
          <h6>EN</h6>
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
  border: 2px solid #d8d8d8;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    height: calc(100% - 2px);
    width: calc(50% - 2px);
    background-color: #4D8DF7;
    border-radius: 10px;
    position: absolute;
    top: 1px;
    left: 1px;
  }

  h6{
    font-weight: 400;
    margin: 0 .15rem;
  }
`;

export default Navbar;