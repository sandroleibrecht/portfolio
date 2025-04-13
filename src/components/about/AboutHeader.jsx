import React from 'react';
// Util Functions
import openNewTab from '../../assets/util/OpenNewTab';
// Styling & Animations
import styled from 'styled-components';
// Material UI
import { GitHub } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

function AboutHeader({ textContent }) {

  return (
    <HeaderContainer container spacing={0} component="header">
      <InfoContainer item xs={12} sm={12} md={12} lg={12}>
        <div>
          <h2>{textContent.greeting}</h2>
          <h4>
            {textContent.quote1}
            <span className="colorBrace1">{textContent.braceOpen}</span>
            <span>{textContent.title1}</span>
            <span className="colorBrace1">{textContent.braceClose}</span>
            <span>{textContent.connector}</span>
            <span className="colorBrace2">{textContent.braceOpen}</span>
            <span>{textContent.title2}</span>
            <span className="colorBrace2">{textContent.braceClose}</span>
            {textContent.quote2}
          </h4>
          <hr/>
          <GitHub
            tabIndex={0}
            onClick={ () => openNewTab('https://github.com/sandropernerstorfer') }
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openNewTab('https://github.com/sandropernerstorfer');
              }
            }}
          />
        </div>
      </InfoContainer>
    </HeaderContainer>
  );
};

export default AboutHeader;

// Styled Components
const HeaderContainer = styled(Grid)`
  padding: 5vw calc(9% + 1vh);
  width: 100vw;
  background-color: var(--blueDark);

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

  hr{
    height: 1px;
    background-color: #dadada;
    border: none;
    margin: 20px 0;
  }

  div{
    max-width: 950px;
    padding: 1rem;
    border-radius: 20px;
  }

  .sideBar{
    background-color: #fff;
    width: 10px;
    height: 100%;
  }

  h2,h3,h4{
    color: white;
  }

  h3{
    font-size: 2.5rem;
  }
  h2{
    font-size: 3.5rem;
  }
  h4{
    font-weight: 400;
    font-size: 1.1rem;
    margin: .5rem 0 1rem .25rem;
    color: white;
    span{
      color: white;
      font-weight: 500;
      font-size: 1rem;
      font-family: monospace;
    }
    .colorBrace1{
      color: #ff00ff;
    }
    .colorBrace2{
      color: #ffe600;
    }
  }
  svg{
    color: #454545;
    font-size: 2rem;
    border-radius: 15px;
    margin: 1rem 1.5rem 1rem .2rem;
    padding: 3px;
    background-color: white;
    cursor: pointer;
    transition: transform .2s;

    @media (hover: hover){
      &:hover{
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 959px){
    h3  { font-size: 1.5rem;  }
    h2  { font-size: 2.5rem;  }
    h4  { font-size: 1rem; }
    svg { font-size: 2rem;  }
  }
`;
