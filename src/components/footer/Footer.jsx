import React from 'react';
// Util Functions
import openNewTab from '../../assets/util/OpenNewTab';
// Styled & Animation
import styled from 'styled-components';
// Material UI Icons
import { GitHub, Email } from '@material-ui/icons';
// Router
import { useHistory, useLocation } from 'react-router-dom';

function Footer() {

  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <StyledFooter>
      <IconContainer>
        <GitHub onClick={ () => openNewTab('https://github.com/sandropernerstorfer') }/>
        { pathname === '/contact' || <Email onClick={ () => history.push('/contact') } /> }
      </IconContainer>
      <TextContainer>
        &copy; Sandro Pernerstorfer
      </TextContainer>
    </StyledFooter>
  )
}

// Styled Components
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 8rem;
  width: 100%;
  box-shadow: 0px -11px 30px -23px #979696;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  svg{
    font-size: 1.8rem;
    margin: 0 0.6rem;
    cursor: pointer;
    transition: transform .2s;

    @media (hover: hover){
      &:hover{
        transform: scale(1.1);
      }
    }

    &:nth-child(1){ font-size: 1.5rem; color: #585454; position: relative; top: -1px;}
    &:nth-child(2){ color: #41c520 }
  }
`;

const TextContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: .8rem;
  color: #777;
`;

export default Footer;