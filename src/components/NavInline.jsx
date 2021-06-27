import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import NavListContent from './NavListContent';

function NavInline() {
  return (
    <List>
      <NavListContent/>
    </List>
  )
};

const List = styled.div`

  @media (max-width: 570px){
    display: none;
  }
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a{
    margin: 0 2rem;
  }
`;

export default NavInline;