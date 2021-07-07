import React from 'react';
// Styling
import styled from 'styled-components';
// Components
import Button from '../Button';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faAt, faSignature } from '@fortawesome/free-solid-svg-icons';

function ContactForm({ formText }) {
  return (
    <Form>
      <label htmlFor="name">Name</label>
      <div className="inputWrapper">
        <input type="text" name="name" id="name" spellCheck="false"/>
        <FontAwesomeIcon icon={faSignature} />
      </div>
      <label htmlFor="mail">Mail</label>
      <div className="inputWrapper">
        <input type="text" name="mail" id="mail" spellCheck="false"/>
        <FontAwesomeIcon icon={faAt} />
      </div>
      <div className="textareaWrapper" >
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"/>
      </div>
      <Button type="submit" text="Send" icon={faPaperPlane} />
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
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 0 12px -1px #bbb9b9;

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

  button{
    align-self: flex-end;
  }
`;

export default ContactForm;