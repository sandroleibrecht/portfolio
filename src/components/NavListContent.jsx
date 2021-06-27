import React from 'react';
// Styling
import styled from 'styled-components';

function NavListContent() {
  return (
    <>
      <ListItem>About</ListItem>  
      <ListItem>Projects</ListItem>  
      <ListItem>Contact</ListItem>
      <ListItem>
        <LanguageSwitch>
          <h6>DE</h6>
          <h6>EN</h6>
          <div></div>
        </LanguageSwitch>
      </ListItem>
    </>
  )
};

const ListItem = styled.li`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding: 5px 0;
  transition: border-color .4s;

  &:hover{
    border-color: #4D8DF7;
  }
  &:last-child:hover{
    border-color: transparent;
  }
`;

const LanguageSwitch = styled.div`
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

export default NavListContent;