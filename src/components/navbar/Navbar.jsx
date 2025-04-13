import React from 'react';
// Styling & Animations
import styled from 'styled-components';
import { fadeInRightAnimation, fadeInLeftAnimation } from '../../assets/styling/GlobalStyles';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Components
import NavInline from './NavInline';
import NavSide from './NavSide';
// Router
import { Link, useLocation } from 'react-router-dom';
// Redux
import { setNavOpen } from '../../state/navbarState';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

  const { pathname } = useLocation();
  const isProjectDetailsPath = pathname.startsWith('/projects/');
  const dispatch = useDispatch();
  const { menuOpen } = useSelector( state => state.navbar );

  // Functions
  const handleMenuOpen = () => {
    dispatch(setNavOpen());
  };

  return (
    <>
      <TopSpacing detailsOpen={ pathname.split('/')[2] ? true : false }/>
      <StyledNavbar detailsOpen={ pathname.split('/')[2] ? true : false }>
        <Link to='/' tabIndex={isProjectDetailsPath ? -1 : 0}>
          <Logo src={process.env.PUBLIC_URL+'/img/app/AppLogo.png'} menuOpen={menuOpen} alt="Page Logo" />
        </Link>
        <MenuIcon
          tabIndex = {0}
          icon={faBars}
          onClick={ handleMenuOpen }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleMenuOpen();
            }
          }}
        />
        <NavInline/>
        <NavSide/>
      </StyledNavbar>
    </>
  );
};

// Styled Components
const TopSpacing = styled.div`
  width: 100vw;
  height: ${ props => props.detailsOpen ? '0px' : '66px'};
  transition: height .8s;
  transition-delay: .5s;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 9.5vw;
  width: 100vw;
  background-color: #fff;
  box-shadow: 0px 12px 30px -25px #979696;
  z-index: 10000;
  position: fixed;
  top: ${ props => props.detailsOpen ? '-70px' : '0'};
  left: 0;
  transition: top .8s;
  transition-delay: .5s;

  @media (max-width: 630px){
    padding-left: 2.3rem;
    padding-right: 3rem;
  }
`;

const Logo = styled.img`
  position: relative;
  top: 2px;
  width: 30px;
  height: 30px;
  margin-right: 1.5rem;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInLeftAnimation} 1s 1 forwards;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  @media (min-width: 631px){
    display: none;
  }
  color: var(--blueLight);
  font-size: 2.2rem;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInRightAnimation} 1s 1 forwards;
`;

export default Navbar;
