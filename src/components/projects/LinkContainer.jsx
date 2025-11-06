import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCodeBranch, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import OpenNewTab from '../../assets/util/OpenNewTab';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setScrollPosition } from '../../state/projectsState';

function LinkContainer({ route, github, live }) {

  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Container>
      <span
        tabIndex={0}
        onClick={() => {
          history.push(route);
          dispatch(setScrollPosition(window.scrollY));
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            history.push(route);
            dispatch(setScrollPosition(window.scrollY))
          }
        }}>
        <FontAwesomeIcon icon={faInfoCircle}/>
      </span>

      <span
        tabIndex={0}
        onClick={() => OpenNewTab(github)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            OpenNewTab(github);
          }
        }}>
        <FontAwesomeIcon icon={faCodeBranch}/>
      </span>

      {live ? 
        <span
          tabIndex={0}
          onClick={() => OpenNewTab(live)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              OpenNewTab(live);
            }
          }}>
          <FontAwesomeIcon icon={faPlayCircle}/>
        </span>
        :
        null
      }
    </Container>
  )
};

const Container = styled.div`
  border-radius: 12px;
  box-shadow: inset 0 0 5px 1px #e9e9e9;
  padding: .2rem .5rem;

  span{
    font-size: 1.15rem;
    margin: 0 .5rem;
    cursor: pointer;
    &:nth-child(1){ color: var(--blueLight);}
    &:nth-child(2){ color: var(--orange);}
    &:nth-child(3){ color: var(--green);}

    svg{
      transition: all .2s;
      opacity: .8;
    }
    @media (hover:hover){
      & svg:hover{
        opacity: 1;
      }
    }
  }
`;
export default LinkContainer;
