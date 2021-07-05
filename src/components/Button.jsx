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
  color: var(--primary);
  border: 2px solid var(--primary);
  background-color: #fff;
  padding: 0.4rem 0.3rem;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all .1s;

  @media (hover: hover){
    &:hover{
      background-color: var(--primary);
      border-color: var(--primary);
      color: #fff;
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