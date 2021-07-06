import React from 'react';
// Styling
import styled from 'styled-components';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ icon, heading, body, iconColor }) {
  return (
    <CardContainer>
      <FontAwesomeIcon icon={icon} color={iconColor}/>
      <h4>{heading}</h4>
      <p>{body}</p>
    </CardContainer>
  )
};

// Styled Components
const CardContainer = styled.div`
  max-width: 20rem;
  min-width: 260px;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  text-align: center;
  padding: 2rem 1rem;
  box-shadow: 0 0 14px -5px #a39f9fa9;

  svg{
    font-size: 5rem;
    padding: .7rem;
    border-radius: 20px;
    background-color: #f7f7f7ac;
    box-shadow: inset -4px -5px 0 0 #00000026;
  }

  h4{
    margin: 1rem 0;
    font-weight: 500;
    color: var(--primaryLight);
  }

  p{
    line-height: 1.5rem;
    font-weight: 400;
    font-size: 0.9rem;
  }
`;

export default Card;