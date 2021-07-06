import React from 'react';
// Translations
import english from '../../translations/about/skills_en.json';
import german from '../../translations/about/skills_de.json';
// Styled & Animation
import styled from 'styled-components';
// Material UI Icons
import { GitHub, LinkedIn } from '@material-ui/icons';
// Components
import Button from '../Button';
// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faWrench, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
// Redux
import { useSelector } from 'react-redux';


function Footer() {

  const { selectedLanguage } = useSelector( state => state.language );
  const translation = selectedLanguage === 'en' ? english : german;

  return (
    <StyledFooter>
      <ButtonContainer>
        <Button text={translation.button_1} icon={faWrench} />
        <Button text={translation.button_2} icon={faEnvelope} />
        <Button icon={faChevronCircleUp} />
      </ButtonContainer>
      <div className="iconContainer">
        <GitHub/>
        <LinkedIn/>
      </div>
      <span>By Sandro Pernerstorfer</span>
    </StyledFooter>
  )
}

// Styled Components
const StyledFooter = styled.footer`
  
`;

const ButtonContainer = styled.div`
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media ( max-width: 851px ){
      margin-top: 4rem;
    }
    
    button{
      margin: .5rem;
      max-width: 8rem;
      min-width: 8rem;
      height: 2.5rem;
      flex: 1;

      &:nth-child(3){
        min-width: 3rem;
        width: 3rem;
        @media ( max-width: 851px ){
          min-width: 8rem;
        }
      }
    }
`;

export default Footer;