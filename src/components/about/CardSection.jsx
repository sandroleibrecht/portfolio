import styled from 'styled-components';
import { faCompass, faProjectDiagram, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card';

function CardSection({ textContent }) {

  const cardContent = [
    {
      icon: faCompass,
      buttonText: textContent[0].button,
      iconColor: '#3B82F6',
      buttonLink: '/'
    },
    {
      icon: faProjectDiagram,
      buttonText: textContent[1].button,
      iconColor: '#F59E0B',
      buttonLink: '/projects'
    },
    {
      icon: faPaperPlane,
      buttonText: textContent[2].button,
      iconColor: '#10B981',
      buttonLink: '/contact'
    }
  ];

  return (
    <Cards>
      {cardContent.map( (card, i) => (
        <CardContainer key={card.buttonText+i}>
          <Card icon={card.icon} buttonText={card.buttonText} buttonLink={card.buttonLink} iconColor={card.iconColor} />
        </CardContainer>
      ))}
    </Cards>
  )
}

const Cards = styled.section`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 5.5rem 2vw;
  margin: 0 auto;
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
