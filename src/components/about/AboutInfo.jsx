import React from 'react';
// Styling & Animations
import styled from 'styled-components';
// Components
import CardSection from './CardSection';
import PersonalSection from './PersonalSection';

function AboutInfo() {
  return (
    <InfoContainer>
      <CardSection/>
      <PersonalSection/>
    </InfoContainer>
  );
};

// Styled Components
const InfoContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 5.5rem 2vw;
`;

export default AboutInfo;