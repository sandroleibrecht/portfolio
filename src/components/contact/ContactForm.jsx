import React, { useRef, useEffect } from 'react';
// Styling
import styled from 'styled-components';
// Components
import Button from '../Button';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faAt, faSignature, faSpinner } from '@fortawesome/free-solid-svg-icons';
// Utils
import { validateInputs, sendEmail } from '../../assets/util/ContactForm';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setFocus, setValue, setErrors, resetForm }  from '../../state/contactState';

function ContactForm({ formText }) {

  // Redux
  const { formFocusing, values, errors, isSubmitting, submitMessage } = useSelector( state => state.contact );
  const dispatch = useDispatch();

  // Name Input Reference
  const nameInput = useRef(null);

  // Effects
  useEffect(() => {
    if (formFocusing) nameInput.current.focus();
    dispatch(setFocus(false));
  }, [formFocusing, dispatch]);

  useEffect(() => {
    dispatch(resetForm());
  }, [dispatch]);

  // Handle Submission
  const handleSubmit = e => {
    e.preventDefault();

    const validationErrors = validateInputs(values);
    dispatch(setErrors(validationErrors));

    if (Object.values(validationErrors).some( error => error === true )) return;
    
    sendEmail(e.target);
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <label htmlFor="name" className={errors.name ? 'error': 'noerror' }>Name</label>
      <div className="inputWrapper">
        <input 
          onChange={ e => dispatch(setValue('name', e.target.value))}
          value={values.name}
          ref={nameInput}
          type="text" name="name" id="name" spellCheck="false"
        />
        <FontAwesomeIcon icon={faSignature} />
      </div>
      <label htmlFor="mail" className={errors.mail ? 'error': null }>Mail</label>
      <div className="inputWrapper">
        <input
          onChange={ e => dispatch(setValue('mail', e.target.value))}
          value={values.mail}
          type="text" name="mail" id="mail" spellCheck="false"
        />
        <FontAwesomeIcon icon={faAt} />
      </div>
      <div className="textareaWrapper" >
        <label htmlFor="message" className={errors.message ? 'error': null }>{formText.message}</label>
        <textarea
          onChange={ e => dispatch(setValue('message', e.target.value))}
          value={values.message}
          name="message" id="message" 
        />
      </div>
      <div className="formBottomContainer">
        <span className={ submitMessage.isError ? 'error' : null } >{submitMessage.message}</span>
        <Button
          type="submit"
          text={formText.submit}
          icon={ isSubmitting ? faSpinner : faPaperPlane }
          iconSpin={ isSubmitting }
        />
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