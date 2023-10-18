import React from 'react';
// Text Content
import navbarText from '../../assets/translations/navbar.json';
// Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { spinInAnimation } from '../../assets/styling/GlobalStyles';
// Language Switch
import LanguageSwitch from '../LanguageSwitch';
// Router
import { Link, useLocation } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';

function NavListContent() {

  const { selectedLanguage } = useSelector( state => state.language );
  const { pathname } = useLocation();

  const { links } = navbarText[selectedLanguage];

  return (
    <>
      <ListItem to='/'>
        {links.about}
        <Line transition={{ duration: 0.7 }} initial={{ width: 0 }} animate={{ width: pathname === '/' ? '100%' : '0' }}/>
      </ListItem>
      <ListItem to='/projects'>
        {links.projects}
        <Line transition={{ duration: 0.7 }} initial={{ width: 0 }} animate={{ width: pathname === '/projects' ? '100%' : '0' }}/>
      </ListItem>
      <ListItem to='/contact'>
        {links.contact}
        <Line transition={{ duration: 0.7 }} initial={{ width: 0 }} animate={{ width: pathname === '/contact' ? '100%' : '0' }}/>
      </ListItem>
      <LanguageSwitch/>
    </>
  )
};

const ListItem = styled(Link)`
  cursor: pointer;
  padding: 5px 0;
  position: relative;
  transition: color .25s;
  white-space: nowrap;
  font-weight: 600;
  color: #626262;
  font-size: .9rem;
  transform: scale(0);
  animation: ${spinInAnimation} 1.5s 1 forwards;
  animation-delay: .4s;

  &:nth-child(2){
    animation-delay: .6s;
  }
  &:nth-child(3){
    animation-delay: .8s;
  }

  @media (hover: hover){
    &:hover{
      color: var(--blue);
    }
  }
`;

const Line = styled(motion.div)`
  height: 2px;
  border-radius: 100px;
  background: var(--blueLight);
  width: 0;
  position: absolute;
  bottom: -2px;
  left: 0%;
`;

export default NavListContent;
