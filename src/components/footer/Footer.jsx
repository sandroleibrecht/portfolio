import openNewTab from '../../assets/util/OpenNewTab';
import styled from 'styled-components';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

function Footer() {

  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <StyledFooter>
      <IconContainer>
        <GitHub
          id='githubIcon'
          className='linkIcon'
          tabIndex={0}
          onClick={ () => openNewTab('https://github.com/sandropernerstorfer')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openNewTab('https://github.com/sandropernerstorfer');
            }
          }}
        />
        <LinkedIn
          id='linkedInIcon'
          className='linkIcon'
          tabIndex={0}
          onClick={ () => openNewTab('https://www.linkedin.com/in/sandroleibrecht/')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openNewTab('https://www.linkedin.com/in/sandroleibrecht/');
            }
          }}
        />
        { pathname === '/contact' 
        || 
        <Email
          id='emailIcon'
          className='linkIcon'
          tabIndex = {0}
          onClick={ () => history.push('/contact') }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              history.push('/contact');
            }
          }}
        />}
      </IconContainer>
      <TextContainer>
        &copy; Sandro Leibrecht
      </TextContainer>
    </StyledFooter>
  )
}

// Styled Components
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 8rem;
  width: 100%;
  box-shadow: 0px -11px 30px -23px #979696;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  .linkIcon{
    font-size: 1.8rem;
    margin: 0 0.6rem;
    cursor: pointer;
    transition: transform .2s;

    @media (hover: hover){
      &:hover{
        transform: scale(1.1);
      }
    }

  }
  
  #githubIcon{
    font-size: 1.5rem;
    color: #454545;
    position: relative;
    top: -1px;
  }

  #linkedInIcon{
    color: #0A66C2;
  }
  
  #emailIcon{
    color: #10B981
  }
`;

const TextContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: .8rem;
  color: #777;
`;

export default Footer;
