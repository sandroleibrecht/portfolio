import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import NavListContent from './NavListContent';

function NavSide() {
  return (
    <MenuContainer>
      <List>
        <NavListContent/>
      </List>
    </MenuContainer>
  )
};

const MenuContainer = styled.nav`
  @media (min-width: 571px){
    display: none;
  }
  padding-top: 60px;
  z-index: 900;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  width: 7.8rem;
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

export default NavSide;