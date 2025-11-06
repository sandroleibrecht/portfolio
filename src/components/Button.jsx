import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ text, icon, iconSpin = false }) {
  return (
    <StyledButton iconMargin={ text ? true : false }>
      { icon ? <FontAwesomeIcon icon={icon} spin={iconSpin} /> : null }
      { text ? text : null }
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: white;
  border-color: var(--blueLight);
  color: var(--blueLight);
  border-width: 1px;
  border-style: solid;
  padding: 0.3rem;
  border-radius: 5px;
  font-size: .8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s;

  @media (hover: hover){
    &:hover{
      background-color: var(--blue);
      border-color: var(--blue);
      color: white;
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
