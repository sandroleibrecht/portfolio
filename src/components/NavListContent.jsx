import React from 'react';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { spinInAnimation, fadeInRightAnimation } from '../GlobalStyles';
// Router
import { Link, useLocation } from 'react-router-dom';
// Redux
import { setLanguage } from '../state/languageState';
import { useDispatch, useSelector } from 'react-redux';

function NavListContent() {

  const dispatch = useDispatch();
  const { selectedLanguage } = useSelector( state => state.language );
  const { pathname } = useLocation();

  // Functions
  const handleLanguageChange = () => {
    if( selectedLanguage === 'en' ){
      dispatch(setLanguage('de'));
      localStorage.setItem('spReactPortfolio_Language', 'de');
    }
    else{
      dispatch(setLanguage('en'));
      localStorage.setItem('spReactPortfolio_Language', 'en');
    }
  };

  return (
    <>
      <ListItem to='/'>
        About
        <Line transition={{ duration: 0.7 }} initial={{ width: 0 }} animate={{ width: pathname === '/' ? '100%' : '0' }}/>
      </ListItem>
      <ListItem to='/projects'>
        Projects
        <Line transition={{ duration: 0.7 }} initial={{ width: 0 }} animate={{ width: pathname === '/projects' ? '100%' : '0' }}/>
      </ListItem>
      <ListItem to='/contact'>
        Contact
        <Line transition={{ duration: 0.7 }} initial={{ width: 0 }} animate={{ width: pathname === '/contact' ? '100%' : '0' }}/>
      </ListItem>
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
  padding: 5px 0;
  position: relative;
  transition: color .25s;
  font-weight: 100;
  transform: scale(0);
  animation: ${spinInAnimation} 1.5s 1 forwards;

  &:nth-child(2){
    animation-delay: .1s;
  }
  &:nth-child(3){
    animation-delay: .3s;
  }

  @media (hover: hover){
    &:hover{
      color: #4D8DF7;
    }
  }
`;

const Line = styled(motion.div)`
  height: 2px;
  border-radius: 100px;
  background: #4d8ef7c1;
  width: 0;
  position: absolute;
  bottom: -2px;
  left: 0%;
`;

const LanguageSwitch = styled.div`
  margin: 0 2rem;
  width: 45px;
  height: 20px;
  padding: 2px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInRightAnimation} 1s 1 forwards;
  animation-delay: .5s;

  h6{
    font-weight: 300;
    margin: 0 .15rem;
  }
`;

const ControlSwitch = styled.div`
  height: calc(100% - 2px);
  width: calc(50% - 2px);
  background-color: #4D8DF7;
  border: 2px solid #256cdd;
  border-radius: 10px;
  position: absolute;
  top: 1px;
  left: ${ props => props.language === 'en' ? '2px' : '50%' };
  transition: left .35s;
`;

export default NavListContent;