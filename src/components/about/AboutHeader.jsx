import openNewTab from '../../assets/util/OpenNewTab';
import styled from 'styled-components';
import { GitHub, LinkedIn } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

function AboutHeader({ textContent }) {

  return (
    <HeaderContainer container spacing={0} component="header">
      <InfoContainer item xs={12} sm={12} md={12} lg={12}>
        <div>
          <h3>{textContent.fullName}</h3>
          <hr/>
          <p>{textContent.role}</p>
          <GitHub
            id="githubIcon"
            className="linkIcon"
            tabIndex={0}
            onClick={ () => openNewTab('https://github.com/sandropernerstorfer') }
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openNewTab('https://github.com/sandropernerstorfer');
              }
            }}>
          </GitHub>
          <LinkedIn
            id="linkedInIcon"
            className="linkIcon"
            tabIndex={0}
            onClick={ () => openNewTab('https://www.linkedin.com/in/sandropernerstorfer/') }
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openNewTab('https://www.linkedin.com/in/sandropernerstorfer/');
              }
            }}>
          </LinkedIn>
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

  h3{
    font-size: 2.1rem;
    color: white;
  }

  p{
    margin: .5rem 0 1rem .25rem;
    font-size: 1.1rem;
    color: white;
  }

  .linkIcon{
    font-size: 2rem;
    border-radius: 15px;
    margin: 1rem 1rem 1rem .2rem;
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

  #githubIcon{
    color: #454545;
  }

  #linkedInIcon{
    color: #0A66C2;
  }

  @media (max-width: 959px){
    h3  { font-size: 1.5rem;  }
    p  { font-size: 1rem; }
    svg { font-size: 2rem;  }
  }
`;
