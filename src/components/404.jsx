import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function NotFoundPage({ buttonText, buttonIcon }) {
  return (
    <Container404>
      <div>
        <img src={process.env.PUBLIC_URL + '/img/app/404.svg'} alt="404 Illustration"/>
        <h1>oops! 404 Error</h1>
        <div>
          <Button text={ buttonText || 'Homepage' } icon={ buttonIcon || faHome }/>
        </div>
      </div>
    </Container404>
  );
};

// Styled Components
const Container404 = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 12vw;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img{
    width: 100%;
    max-width: 500px;
    height: auto;
  }

  h1{
    margin: 1rem 0;

    @media (max-width: 350px){
      font-size: 1.4rem;
    }
  }

  div > div{
    width: 100%;
    border-top: 2px solid #dddddd;
    padding-top: 1.5rem;

    button{
      font-size: .9rem;
    }
  }
`;

export default NotFoundPage;