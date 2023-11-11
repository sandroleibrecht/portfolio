import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import Button from '../Button';
// FontAwesome
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
// Router
import { useHistory } from 'react-router-dom';

function PersonalSection({ textContent }) {

  const history = useHistory();

  return (
    <AboutDescription>
      <div className="textContainer">
        <p>
          {textContent.text[0]}<br/>
          {textContent.text[1]}<br/>
          {textContent.text[2]}<br/>
          {textContent.text[3]}<br/>
        </p>
      </div>
      <div className="buttonContainer" onClick={() => history.push('/projects')}>
        <Button text={textContent.button} icon={faChevronCircleRight} />
      </div>
    </AboutDescription>
  );
};

// Styled Components
const AboutDescription = styled.section`
  width: 100%;
  padding: 8rem 2vw;

  .textContainer{
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      font-size: 1rem;
      line-height: 1.85rem;
      padding: 0 1rem;
    }
  }

  .buttonContainer{
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

export default PersonalSection;
