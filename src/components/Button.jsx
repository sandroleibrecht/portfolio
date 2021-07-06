import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ text, icon }) {
  return (
    <StyledButton iconMargin={ text ? true : false }>
      { icon ? <FontAwesomeIcon icon={icon} /> : null }
      { text ? text : null }
    </StyledButton>
  );
};

// Styled Components
const StyledButton = styled.button`
  color: #fff;
  background-color: var(--blue);
  border-color: var(--blue);
  border-width: 2px;
  border-style: solid;
  padding: 0.3rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all .08s;

  @media (hover: hover){
    &:hover{
      background-color: var(--primaryDark);
      border-color: var(--primaryDark);
      box-shadow: 0 0 20px 1px #d4d3d39e;
    }
  }
  
  svg{
    margin-right: ${ props => props.iconMargin ? '8px' : '0' };
    background-color: transparent;
    transition: transform .1s;
  }
`;

export default Button;