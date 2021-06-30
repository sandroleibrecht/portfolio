import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// Components
import NavListContent from './NavListContent';
// Redux
import { setNavClose } from '../state/navbarState';
import { useDispatch, useSelector } from 'react-redux';

function NavSide() {

  const dispatch = useDispatch();

  const { menuOpen } = useSelector( state => state.navbar);

  // Functions
  const handleMenuClose = () => {
    dispatch(setNavClose());
  };

  return (
    <>
    <MenuShadow menuOpen={menuOpen} />
    <MenuContainer menuOpen={menuOpen} >
      <List>
        <CloseIcon icon={faTimes} onClick={ handleMenuClose } />
        <NavListContent/>
      </List>
    </MenuContainer>
    </>
  )
};

const MenuShadow = styled.div`
  @media (min-width: 571px){
    display: none;
  }
  z-index: ${ props => props.menuOpen ? '900' : '-900' };
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${ props => props.menuOpen ?'#000000b7' : 'transparent' };
  transition: background-color .55s;
`;

const MenuContainer = styled.nav`
  @media (min-width: 571px){
    display: none;
  }
  padding-top: 1rem;
  z-index: 1000 !important;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  width: 9.5rem;
  height: 100%;
  transform: ${ props => props.menuOpen ? 'translate(0)' : 'translate(100%)' };
  transition: transform .55s;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a{
    margin: 1rem 0;
  }

  div:first-of-type{
    margin-top: 1rem;
    div{
      margin-top: 0;
    }
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export default NavSide;