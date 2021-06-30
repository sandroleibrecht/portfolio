import React from 'react';
// Styling & Animations
import styled from 'styled-components';
import { fadeInRightAnimation, fadeInLeftAnimation } from '../GlobalStyles';
// Logo
import logoImage from '../assets/AppLogo.png';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Components
import NavInline from './NavInline';
import NavSide from './NavSide';
// Router
import { Link } from 'react-router-dom';
// Redux
import { setNavOpen } from '../state/navbarState';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

  const dispatch = useDispatch();
  const { menuOpen } = useSelector( state => state.navbar );

  // Functions
  const handleMenuOpen = () => {
    dispatch(setNavOpen());
  };

  return (
    <StyledNavbar>
      <Link to='/'>
        <Logo src={logoImage} menuOpen={menuOpen} alt="Page Logo" />
      </Link>
      <MenuIcon icon={faBars} onClick={ handleMenuOpen }/>
      <NavInline/>
      <NavSide/>
    </StyledNavbar>
  );
};

// Styled Components
const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 9.5vw;
  width: 100vw;

  @media (max-width: 570px){
    padding-left: 2.3rem;
    padding-right: 3rem;
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 1.5rem;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInLeftAnimation} 1s 1 forwards;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  @media (min-width: 571px){
    display: none;
  }
  color: var(--primaryLight);
  font-size: 2.2rem;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInRightAnimation} 1s 1 forwards;
`;

export default Navbar;