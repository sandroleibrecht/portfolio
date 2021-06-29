import React from 'react';
// Styling & Animations
import styled from 'styled-components';
import { Icon } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
// Image
import headerImage from '../assets/headerImage.svg';

function AboutHeader() {
  return (
    <HeaderContainer>
      <InfoContainer>
        <div>
          <h3>Hello !</h3>
          <h2>I'm Sandro</h2>
          <h4>A passionate <span>Web Developer</span> with a desire to learn</h4>
          <Icon><GitHub/></Icon>
          <Icon><LinkedIn/></Icon>
        </div>
      </InfoContainer>
      <DesignContainer>
          <img src={headerImage} alt="code window"/>
      </DesignContainer>
    </HeaderContainer>
  );
};

export default AboutHeader;

// Styled Components
const HeaderContainer = styled.header`
  background-color: #f7f7f7c1;
  padding: calc(10% + 1vh);
  width: 100vw;
  min-height: calc(100vh - 66px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  h3{
    font-size: 2.5rem;
  }
  h2{
    font-size: 5rem;
  }
  h4{
    font-weight: 400;
    font-size: 1.1rem;
    margin-left: .25rem;
    color: #b3b3b3;
    span{
      color: #4D8DF7;
    }
  }
`;

const DesignContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

    img{
      width: 100%;
      height: auto;
    }
`;