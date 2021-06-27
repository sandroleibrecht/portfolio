import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// Components
import NavListContent from './NavListContent';

function NavSide() {
  return (
    <MenuContainer>
      <List>
        <CloseIcon icon={faTimes} />
        <NavListContent/>
      </List>
    </MenuContainer>
  )
};

const MenuContainer = styled.nav`
  @media (min-width: 571px){
    display: none;
  }
  padding-top: 1rem;
  z-index: 1000;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  width: 10rem;
  height: 100%;
  border: 1px solid #ccc;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li{
    margin: 1rem 0;
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: #4D8DF7;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export default NavSide;