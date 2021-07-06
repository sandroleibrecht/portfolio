import React from 'react';
// Styling
import styled from 'styled-components';

function Line() {
  return <StyledLine/>
};

// Styled Components
const StyledLine = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 2px;
  background-color: #cccccc6c;
`;

export default Line;