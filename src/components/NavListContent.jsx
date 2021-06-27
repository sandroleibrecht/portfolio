import React from 'react';
// Styling
import styled from 'styled-components';
// Router
import {Link} from 'react-router-dom';
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
      <ListItem to='/'>About</ListItem>
      <ListItem to='/projects'>Projects</ListItem>
      <ListItem to='/contact'>Contact</ListItem>
      <LanguageSwitch onClick={handleLanguageChange}>
        <h6>DE</h6>
        <h6>EN</h6>
        <ControlSwitch language={selectedLanguage} ></ControlSwitch>
      </LanguageSwitch>
    </>
  )
};

const ListItem = styled(Link)`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding: 5px 0;
  transition: border-color .4s;
  color: #000;

  &:hover{
    border-color: #4D8DF7;
  }
  &:last-child:hover{
    border-color: transparent;
  }
`;

const LanguageSwitch = styled.div`
  margin: 0 2rem;
  width: 45px;
  height: 20px;
  padding: 2px;
  border: 2px solid #d8d8d8;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

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
  transition: left .35s;
`;

export default NavListContent;