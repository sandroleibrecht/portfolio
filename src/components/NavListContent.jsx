import React from 'react';
// Styling
import styled from 'styled-components';
// Redux
import { setLanguage } from '../state/languageState';
import { useDispatch, useSelector } from 'react-redux';

function NavListContent() {

  const dispatch = useDispatch();
  const { selectedLanguage } = useSelector( state => state.language );

  // Functions
  const handleLanguageChange = () => {
    selectedLanguage === 'en' ? dispatch(setLanguage('de')) : dispatch(setLanguage('en'));
  };

  return (
    <>
      <ListItem>About</ListItem>  
      <ListItem>Projects</ListItem>  
      <ListItem>Contact</ListItem>
      <ListItem onClick={handleLanguageChange}>
        <LanguageSwitch>
          <h6>DE</h6>
          <h6>EN</h6>
          <ControlSwitch language={selectedLanguage} ></ControlSwitch>
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

  h6{
    font-weight: 400;
    margin: 0 .15rem;
  }
`;

const ControlSwitch = styled.div`
  height: calc(100% - 2px);
  width: calc(50% - 2px);
  background-color: #4D8DF7;
  border-radius: 10px;
  position: absolute;
  top: 1px;
  left: ${ props => props.language === 'en' ? '1px' : '50%' };
  transition: left .5s;
`;

export default NavListContent;