import styled from 'styled-components';
import { fadeInRightAnimation } from '../assets/styling/GlobalStyles';
import { setLanguage } from '../state/languageState';
import { useDispatch, useSelector } from 'react-redux';

function LanguageSwitch() {

  const dispatch = useDispatch();
  const { selectedLanguage } = useSelector( state => state.language );

  const handleLanguageChange = () => {
    if( selectedLanguage === 'en' ){
      dispatch(setLanguage('de'));
      localStorage.setItem('spReactPortfolio_Language', 'de');
    }
    else{
      dispatch(setLanguage('en'));
      localStorage.setItem('spReactPortfolio_Language', 'en');
    }
  };

  return (
    <LangSwitch 
      tabIndex={0}
      onClick={handleLanguageChange} 
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLanguageChange();
        }
      }}>
      <h6>DE</h6>
      <h6>EN</h6>
      <ControlSwitch language={selectedLanguage} ></ControlSwitch>
    </LangSwitch>
  )
}

const LangSwitch = styled.div`
  margin: 0 2rem;
  width: 45px;
  height: 20px;
  padding: 2px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInRightAnimation} 1s 1 forwards;
  animation-delay: 1s;

  h6{
    font-weight: 300;
    margin: 0 .15rem;
  }
`;

const ControlSwitch = styled.div`
  height: calc(100% - 2px);
  width: calc(50% - 2px);
  background-color: var(--blue);
  border: 2px solid var(--blueDark);
  border-radius: 10px;
  position: absolute;
  top: 1px;
  left: ${ props => props.language === 'en' ? '2px' : '50%' };
  transition: left .35s;
`;

export default LanguageSwitch;
