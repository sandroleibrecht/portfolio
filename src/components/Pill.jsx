import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

function Pill({ image, text, color }) {
  return (
    <StyledPill 
      avatar={ image ? <StyledAvatar src={process.env.PUBLIC_URL + image}/> : null}
      label={text}
      customcolor={color} />
  );
};

const StyledPill = styled(Chip)`
  background-color: ${ props => props.customcolor } !important;
  color: #fff !important;
  font-weight: 600;
  margin: 0.25rem;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #fff !important;
  padding: 4px;
`;

export default Pill;
