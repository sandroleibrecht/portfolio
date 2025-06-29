import styled from 'styled-components';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function Card({ icon, buttonText, buttonLink, iconColor }) {

  const history = useHistory();

  return (
    <CardContainer>
      <FontAwesomeIcon className='cardIcon' icon={icon} color={iconColor}/>
      <div className="buttonContainer" onClick={() => history.push(buttonLink)}>
        <Button text={buttonText} icon={faChevronCircleRight} />
      </div>
    </CardContainer>
  )
};

// Styled Components
const CardContainer = styled.div`
  max-width: 20rem;
  min-width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  text-align: center;
  padding: 2rem 1rem;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);

  .cardIcon{
    font-size: 3rem;
    padding: .7rem;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: inset 0px 0px 4px 0px #6e6e6e4a;
  }

  .buttonContainer{
    margin-left: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      width: 6rem;
      height: 2rem;
    }
  }
`;

export default Card;
