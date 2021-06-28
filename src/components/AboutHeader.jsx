import React from 'react';
// Styling & Animations
import styled from 'styled-components';

function AboutHeader() {
  return (
    <HeaderContainer>
      <InfoContainer>
        <h1>Hey i'm Sandro</h1>
      </InfoContainer>
      <DesignContainer>
        Img
      </DesignContainer>
    </HeaderContainer>
  );
};

export default AboutHeader;

// Styled Components
const HeaderContainer = styled.header`
  background-color: #f7f7f7c1;
  width: 100vw;
  min-height: calc(100vh - 66px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;
  
  h1{
    font-size: 5rem;
  }
`;

const DesignContainer = styled.div`
  flex: 1;
`;