import React from 'react';
// Styling & Animations
import styled from 'styled-components';
// Material UI
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

function SkillChip({ image, text, color }) {
  return (
    <StyledChip avatar={<StyledAvatar src={image} />} label={text} customcolor={color} />
  );
};

// Styled Components
const StyledChip = styled(Chip)`
  background-color: ${ props => props.customcolor } !important;
  color: #fff !important;
  font-weight: 600;
  margin: 0.2rem;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #fff !important;
  padding: 4px;
`;

export default SkillChip;