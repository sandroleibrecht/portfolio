import React from 'react';
// Util Functions
import openNewTab from '../../assets/util/OpenNewTab';
// Styling & Animations
import styled from 'styled-components';
// Material UI
import { GitHub } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

function AboutHeader({ textContent }) {

  function showImage(e){
    e.target.classList.add('image-visible');
  };

  return (
    <HeaderContainer container spacing={0} component="header">
      <InfoContainer item xs={12} sm={12} md={6} lg={6}>
        <div>
          <h3>{textContent.greeting}</h3>
          <h2>{textContent.name}&nbsp;!</h2>
          <h4>{textContent.quote1}<span>{textContent.title}</span>{textContent.quote2}</h4>
          <GitHub onClick={ () => openNewTab('https://github.com/sandropernerstorfer') }/>
        </div>
      </InfoContainer>
      <DesignContainer item xs={12} sm={12} md={6} lg={6}>
          <img onLoad={showImage} src={process.env.PUBLIC_URL+'/img/app/headerImage.svg'} alt="code window"/>
      </DesignContainer>
    </HeaderContainer>
  );
};

export default AboutHeader;

// Styled Components
const HeaderContainer = styled(Grid)`
  padding: 5vw calc(9% + 1vh);
  width: 100vw;
  box-shadow: inset 0px -11px 30px -12px #E3E3E3;

  @media (max-width: 959px){
    padding-top: 4rem;
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
      color: var(--blue);
    }
  }
  svg{
    color: #fff;
    font-size: 2rem;
    border-radius: 15px;
    margin: 1rem 1.5rem 1rem .2rem;
    padding: 4px;
    background-color: var(--blueLight);
    cursor: pointer;
    transition: transform .2s;

    @media (hover: hover){
      &:hover{
        transform: scale(1.1);
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
      opacity: 0;
      width: 100%;
      height: auto;
      transition: all 1.5s;
    }

    .image-visible{
      opacity: 1;
    }

    @media (max-width: 959px){
      padding: 3rem 2rem;
    }
`;