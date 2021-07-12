import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { faEnvelope, faPenAlt } from '@fortawesome/free-solid-svg-icons';
// Components
import Button from '../Button';
// Redux
import { useDispatch } from 'react-redux';
import { setFocus } from '../../state/contactState';

function ContactInfo({ infoText }) {

  const dispatch = useDispatch();

  return (
    <InfoWrapper>
      <div className="textSection">
        <h1>{infoText.heading}</h1>
        <p>{infoText.info1}</p>
        <p>{infoText.info2}</p>
      </div>
      <div className="buttonContainer">
        <div onClick={ () => dispatch( setFocus(true) ) }>
          <Button icon={faPenAlt} text={infoText.button1} />
        </div>
        <div onClick={ () => window.open('mailto:sandro.pernerstorfer@gmail.com') } >
          <Button icon={faEnvelope} text={infoText.button2} />
        </div>
      </div>
    </InfoWrapper>
  );
};

// Styled Components
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color:#f1f1f1;
  border-radius: 12px;
  padding: 1rem;
  padding-bottom: 2rem;
  margin: 0 .5rem;
  margin-bottom: 2rem;
  text-align: center;
  
  @media ( max-width: 836px){
    align-items: center;
  }

  .textSection{
    margin-bottom: 2rem;
    h1{
      margin-bottom: 1.2rem;
      font-weight: 600;
      color: #556;
    }

    p{
      color: #706e6e;
      font-size: .95rem;
    }
  }

  .buttonContainer{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ( max-width: 310px){
      flex-direction: column;
      button:nth-child(2){ padding-right: 14px }
    }

    button{ margin-top: .5rem }
  }
`;

export default ContactInfo;