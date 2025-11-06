import styled from 'styled-components';
import { fadeInLeftAnimation } from '../../assets/styling/GlobalStyles';
import LanguageSwitch from '../LanguageSwitch';
import Button from '../Button';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function TopBar({ projectName, buttonText }) {

  const history = useHistory();

  return (
    <NavBar>
      <div className="leftBarContainer">
        <div
          onClick={() => history.push('/projects')}
          className="buttonContainer">
          <Button text={buttonText} icon={faChevronCircleLeft} />
        </div>
        <h3>{projectName}</h3>
      </div>
      <LanguageSwitch/>
    </NavBar>
  )
};

const NavBar = styled.nav`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 20px 15px -15px #7977773b;
  background-color: #fff;
  height: 66px;
  padding: 0 2vw;
  gap: 1rem;

  @media (max-width: 700px){
    div:nth-child(2){
      margin-right: 1vw;
    }
  }

  .leftBarContainer{
    display: flex;
    align-items: center;
    gap: 1rem;

    h3{
      color: #444;
      font-weight: 500;

      @media (max-width: 700px){
        display: none;
      }
    }
  }

  .buttonContainer{
    opacity: 0;
    animation: ${fadeInLeftAnimation} 1s 1 forwards;
    animation-delay: .5s;
    
    button{
      width: 6rem;
      height: 2rem;
    }
  }
`;

export default TopBar;
