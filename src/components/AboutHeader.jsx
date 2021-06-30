import React from 'react';
// Styling & Animations
import styled from 'styled-components';
// Image
import headerImage from '../assets/headerImage.svg';
// Material UI
import { GitHub } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

function AboutHeader() {
  return (
    <HeaderContainer container spacing={0} component="header">
      <InfoContainer item xs={12} sm={12} md={6} lg={6}>
        <div>
          <h3>Hello !</h3>
          <h2>Ich bin Sandro</h2>
          <h4>A passionate <span>Web Developer</span> with a desire to learn</h4>
          <GitHub onClick={ () => window.open('https://github.com/sandropernerstorfer', '_blank')}/>
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
  /* background-color: #f7f7f7c1; */
  padding: 5vw calc(9% + 1vh);
  width: 100vw;
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

  h3{
    font-size: 2.5vw;
  }
  h2{
    font-size: 5vw;
  }
  h4{
    font-weight: 400;
    font-size: 1.4vw;
    margin: .5rem 0 1rem .25rem;
    color: #b3b3b3;
    span{
      color: var(--primary);
    }
  }
  svg{
    color: var(--primaryLight);
    margin-left: .25rem;
    font-size: 2.5vw;
  }

  @media (min-width: 1370px){
    h3  { font-size: 2.5rem;  }
    h2  { font-size: 5rem;    }
    h4  { font-size: 1.1rem;  }
    svg { font-size: 2rem;    }
  }


  @media (max-width: 959px){
    h3  { font-size: 5vw;   }
    h2  { font-size: 10vw;  }
    h4  { font-size: 2.5vw; }
    svg { font-size: 2rem;  }
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