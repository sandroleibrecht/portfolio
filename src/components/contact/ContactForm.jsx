import React, { useRef, useEffect, useState } from 'react';
// Styling
import styled from 'styled-components';
// Components
import Button from '../Button';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faAt, faSignature, faSpinner } from '@fortawesome/free-solid-svg-icons';
// Email Service
import emailjs, { init } from 'emailjs-com';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setFocus } from '../../state/contactState';

init(process.env.REACT_APP_EMAIL_USERID);

function ContactForm({ formText }) {

  const { formFocusing } = useSelector( state => state.contact );
  const dispatch = useDispatch();

  const [nameError, setNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({message: '', error: null});
  const [isSending, setIsSending] = useState(false);

  // Element Reference
  const nameInput = useRef(null);

  useEffect(() => {
    if ( formFocusing ) nameInput.current.focus();
    dispatch( setFocus( false ) );
  }, [formFocusing, dispatch])

  // Submit Function
  const handleSubmit = e => {
    e.preventDefault();

    const nameValue = e.target.name.value.trim();
    const mailValue = e.target.mail.value.trim();
    const messageValue = e.target.message.value.trim();

    setNameError( nameValue.length === 0 ? true : false );

    let nameOk, mailOk, messageOk;
    if( nameValue.length > 0 ){
      setNameError(false);
      nameOk = true;
    }
    else{
      setNameError(true);
      nameOk = false;
    };
    if( mailValue.includes('@') && mailValue.includes('.') && mailValue.length > 7 ){
      setMailError(false);
      mailOk = true;
    }
    else{
      setMailError(true);
      mailOk = false;
    };
    if( messageValue.length > 0 ){
      setMessageError(false);
      messageOk = true;
    }
    else{
      setMessageError(true);
      messageOk = false;
    };

    if( !nameOk || !mailOk || !messageOk ) return;

    setIsSending(true);
    const templateID = process.env.REACT_APP_EMAIL_TEMPLATEID;
    const userID = process.env.REACT_APP_EMAIL_USERID;
    emailjs.sendForm('default_service', templateID, e.target, userID)
    .then( res => {
      setSubmitMessage({ message: formText.noError, error: false });
      setIsSending(false);
    })
    .catch( err => {
      setSubmitMessage({ message: formText.error, error: true });
      setIsSending(false);
    })
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <label htmlFor="name" className={nameError ? 'error': 'noerror' }>Name</label>
      <div className="inputWrapper">
        <input type="text" name="name" id="name" spellCheck="false" ref={nameInput} className={ nameError ? 'error' : null }/>
        <FontAwesomeIcon icon={faSignature} />
      </div>
      <label htmlFor="mail" className={mailError ? 'error': null }>Mail</label>
      <div className="inputWrapper">
        <input type="text" name="mail" id="mail" spellCheck="false" className={mailError ? 'error': null }/>
        <FontAwesomeIcon icon={faAt} />
      </div>
      <div className="textareaWrapper" >
        <label htmlFor="message" className={messageError ? 'error': null }>{formText.message}</label>
        <textarea name="message" id="message" className={messageError ? 'error' : null }/>
      </div>
      <div className="formBottomContainer">
        <span className={ submitMessage.error ? 'error' : null } >{submitMessage.message}</span>
        <Button type="submit" text={formText.submit} icon={ isSending ? faSpinner : faPaperPlane } iconSpin={isSending} />
      </div>
    </Form>
  );
};

// Styled Components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  padding: 1rem;
  padding-bottom: .7rem;
  border-radius: 10px;
  margin: 0 .5rem;
  width: 100%;
  max-width: 400px;

  @media ( max-width: 836px){
    max-width: 500px;
  }

  .inputWrapper{
    width: 100%;
    position: relative;
    margin-bottom: 8px;

    svg{
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      color: #ccc;
      transition: color .2s;
    }

    &:focus-within{
      svg{
        color: var(--blueLight);
      }
    }
  }

  label{
    font-size: 0.85rem;
    color: #6b6868;
    font-weight: 600;
    &.error{
      color: #e71313c3;
    }
  }

  input, textarea{
    border-radius: 6px;
    width: 100%;
    margin: 3px 0;
    outline: 0;
    border-width: 2px;
    border-style: solid;
    transition: all .2s;
    padding: .5rem;
    color: #666;
    font-weight: 600;

    &:focus{
      border-color: var(--blueLight);
    }
  }

  input{
    padding-left: 2.2rem;
    border-color: #dfdfdf97;
  }

  .textareaWrapper{
    width: 100%;
    textarea{
      margin-bottom: 8px;
      resize: none;
      border-color: transparent;
      background-color: #f7f7f7;
      height: 150px;

      &:focus{
        background-color: #fff;
        border-color: var(--blueLight);
      }
    }
  }

  .formBottomContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button{
      min-width: 5rem;
      margin-left: 5px;
    }

    span{
      font-size: 0.8rem;
      color: #299129;

      &.error{
        color: #e71313c3;
      }
    }
  }
`;

export default ContactForm;