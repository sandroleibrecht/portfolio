import React from 'react';
// Styling & Animations
import styled from 'styled-components';
import { Icon } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
// Image
import headerImage from '../assets/headerImage.svg';
// Material UI
import Grid from '@material-ui/core/Grid';

function AboutHeader() {
  return (
    <HeaderContainer container spacing={0} component="header">
      <InfoContainer item xs={12} sm={12} md={6} lg={6}>
        <div>
          <h3>Hello !</h3>
          <h2>I'm Sandro</h2>
          <h4>A passionate <span>Web Developer</span> with a desire to learn</h4>
          <Icon><GitHub/></Icon>
          <Icon><LinkedIn/></Icon>
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
  background-color: #f7f7f7c1;
  padding: calc(10% + 1vh);
  width: 100vw;
  min-height: calc(100vh - 66px);
`;

const InfoContainer = styled(Grid)`
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
      color: var(--primary);
    }
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
`;