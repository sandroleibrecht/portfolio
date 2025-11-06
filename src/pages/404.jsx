import {useEffect} from 'react';
import pageText from '../assets/translations/404.json';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
import Button from '../components/Button';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NotFoundPage() {

  const { selectedLanguage } = useSelector( state => state.language );
  const { msg } = pageText[selectedLanguage];

  const history = useHistory();

  useEffect(() => {
    history.replace('/404')
  },[history]);
  
  return (
    <Container404 variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <div>
        <img src={process.env.PUBLIC_URL + '/img/app/404.svg'} alt="404 Illustration"/>
        <h1>Woops!</h1>
        <h1>{msg}</h1>
        <div className="buttonContainer">
          <span onClick={() => history.push('/')}>
            <Button text='Homepage' icon={faHome}/>
          </span>
        </div>
      </div>
    </Container404>
  );
};

// Styled Components
const Container404 = styled(motion.div)`
  width: 100vw;
  min-height: calc(100vh - 66px);
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
    margin-bottom: 1.5rem;
  }

  h1{
    text-align: center;
    color: #3F3E56;

    @media (max-width: 420px){
      font-size: 1.3rem;
    }
  }

  .buttonContainer{
    width: 100%;
    border-top: 2px solid #dddddd;
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;

    button{
      font-size: .9rem;
    }
  }
`;

export default NotFoundPage;
