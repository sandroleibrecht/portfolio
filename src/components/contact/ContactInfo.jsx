import React from 'react';
// Styling
import styled from 'styled-components';
// Font Awesome
import { faEnvelope, faPenSquare } from '@fortawesome/free-solid-svg-icons';
// Components
import Button from '../Button';

function ContactInfo({ infoText }) {
  return (
    <InfoWrapper>
      <div className="textSection">
        <h1>Kontakt</h1>
        <p>schick mir eine Nachricht über das Kontakt Formular,</p>
        <p>oder direkt an meine Email Adresse.</p>
      </div>
      <Button icon={faPenSquare} text="Contact Form" />
      <Button icon={faEnvelope} text="Direct Email" />
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

  @media ( max-width: 836px){
    text-align: center;
    align-items: center;
  }

    button{
      margin-top: .5rem;
      &:nth-child(3){
        padding-right: 13px;
      }
    }

  .textSection{
    margin-bottom: 2rem;
    h1{
      margin-bottom: .5rem;
      font-size: 2rem;
      color: #556;
    }

    p{
      color: #706e6e;
      font-size: .95rem;
    }
  }
`;

export default ContactInfo;