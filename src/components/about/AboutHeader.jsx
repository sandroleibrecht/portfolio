import React from 'react';
// Translations
import german from '../../translations/about/header_de.json';
import english from '../../translations/about/header_en.json';
// Styling & Animations
import styled from 'styled-components';
// Image
import headerImage from '../../assets/headerImage.svg';
// Material UI
import { GitHub, LinkedIn } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
// Redux
import { useSelector } from 'react-redux';

function AboutHeader() {

  const { selectedLanguage } = useSelector( state => state.language );
  const translation = selectedLanguage === 'en' ? english : german;

  return (
    <HeaderContainer container spacing={0} component="header">
      <InfoContainer item xs={12} sm={12} md={6} lg={6}>
        <div>
          <h3>{translation.greeting}</h3>
          <h2>{translation.name}&nbsp;!</h2>
          <h4>{translation.quote1}<span>{translation.title}</span>{translation.quote2}</h4>
          <GitHub onClick={ () => window.open('https://github.com/sandropernerstorfer', '_blank')}/>
          <LinkedIn onClick={ () => window.open('https://www.linkedin.com/in/sandro-pernerstorfer-3153b31ab/', '_blank')}/>
        </div>
      </InfoContainer>
      <DesignContainer item xs={12} sm={12} md={6} lg={6}>
          <img src={headerImage} alt="code window"/>
      </DesignContainer>
    </HeaderContainer>
  );
};

export default AboutHeader;

// Styled Components
const HeaderContainer = styled(Grid)`
  padding: 5vw calc(9% + 1vh);
  width: 100vw;
  -webkit-box-shadow: inset 0px -15px 26px -12px #E3E3E3; 
  box-shadow: inset 0px -11px 30px -12px #E3E3E3;

  @media (max-width: 959px){
    padding-left: 4vw;
    padding-right: 4vw;
  }
`;

const InfoContainer = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2,h3,h4{
    color: #464444;
  }

  h3{
    font-size: 2.5rem;
  }
  h2{
    font-size: 5rem;
  }
  h4{
    font-weight: 400;
    font-size: 1.1rem;
    margin: .5rem 0 1rem .25rem;
    color: #999898;
    span{
      color: var(--primary);
    }
  }
  svg{
    color: #fff;
    font-size: 2rem;
    border-radius: 15px;
    margin: 1rem 1.5rem 1rem .2rem;
    padding: 4px;
    background-color: var(--primaryLight);
    cursor: pointer;
    transition: transform .2s;

    @media (hover: hover){
      &:hover{
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 1370px){
    h3  { font-size: 2.5vw;  }
    h2  { font-size: 5vw;    }
    h4  { font-size: 1.4vw;  }
    svg { font-size: 2rem;    }
  }

  @media (max-width: 959px){
    h3  { font-size: 5vw;   }
    h2  { font-size: 8vw;  }
    h4  { font-size: 2.5vw; }
    svg { font-size: 2rem; margin-left: 1.5rem; }
    text-align: center;
  }

  @media (max-width: 530px){
    h3  { font-size: 1.5rem;  }
    h2  { font-size: 2.5rem;  }
    h4  { font-size: 1rem; }
    svg { font-size: 2rem;  }
  }
`;

const DesignContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;

    img{
      width: 100%;
      height: auto;
    }

    @media (max-width: 959px){
      padding: 3rem 2rem;
    }
`;