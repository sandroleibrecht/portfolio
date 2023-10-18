import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { faLaptopCode, faServer, faBook } from '@fortawesome/free-solid-svg-icons';
// Components
import Card from '../Card';

function CardSection({ textContent }) {

  const cardContent = [
    {
      icon: faLaptopCode,
      heading: textContent[0].heading,
      body: textContent[0].body,
      iconColor: 'var(--blue)'
    },
    {
      icon: faServer,
      heading: textContent[1].heading,
      body: textContent[1].body,
      iconColor: 'var(--orange)'
    },
    {
      icon: faBook,
      heading: textContent[2].heading,
      body: textContent[2].body,
      iconColor: 'var(--green)'
    }
  ];

  return (
    <Cards>
      {cardContent.map( (card, i) => (
        <CardContainer key={card.heading+i}>
          <Card icon={card.icon} heading={card.heading} body={card.body} iconColor={card.iconColor} />
        </CardContainer>
      ))}
    </Cards>
  )
}

// Styled Components
const Cards = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 5.5rem 2vw;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default CardSection;
