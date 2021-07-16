import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCode, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// Utils
import OpenNewTab from '../../assets/util/OpenNewTab';
// Router
import { useHistory } from 'react-router-dom';

function LinkContainer({ route, github, live }) {
  const history = useHistory();
  return (
    <Container>
      <span onClick={() => history.push(route)}  ><FontAwesomeIcon icon={faInfoCircle}/></span>
      <span onClick={() => OpenNewTab(github)} ><FontAwesomeIcon icon={faCode}/></span>
      {live ? 
        <span onClick={() => OpenNewTab(live)} ><FontAwesomeIcon icon={faPlayCircle}/></span>
        :
        null
      }
    </Container>
  )
};

const Container = styled.div`
  border-radius: 12px;
  box-shadow: inset 0 0 5px 1px #e9e9e9;
  padding: .2rem .5rem;

  span{
    font-size: 1.15rem;
    margin: 0 .5rem;
    cursor: pointer;
    &:nth-child(1){ color: var(--blueLight);}
    &:nth-child(2){ color: var(--orange);}
    &:nth-child(3){ color: var(--green);}

    svg{
      transition: all .2s;
      opacity: .75;
    }
    @media (hover:hover){
      & svg:hover{
        opacity: 1;
        transform: translateY(-2px);
      }
    }
  }
`;
export default LinkContainer;