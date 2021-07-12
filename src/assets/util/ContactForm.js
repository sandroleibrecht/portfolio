// Redux
import { store } from '../../index';
import { setSubmitStatus, setSubmitMessage, resetValues }  from '../../state/contactState';
// Email Service
import emailjs, { init } from 'emailjs-com';
init(process.env.REACT_APP_EMAIL_USERID);
const templateID = process.env.REACT_APP_EMAIL_TEMPLATEID;
const userID = process.env.REACT_APP_EMAIL_USERID;

export const validateInputs = ({ name, mail, message }) => {
  const errors = {};
  errors.name = name.trim() ? false : true;
  errors.mail = mail.trim().length > 6 && mail.includes('@') && mail.includes('.') ? false : true;
  errors.message = message.trim() ? false : true;
  return errors;
};

export const sendEmail = (formData, { errorMsg, noErrorMsg }) => {
  store.dispatch(setSubmitStatus(true));
  emailjs.sendForm('default_service', templateID, formData, userID)
  .then( res => {
    store.dispatch(setSubmitMessage({ message: noErrorMsg, isError: false }));
    store.dispatch(resetValues());
  })
  .catch( err => {
    store.dispatch(setSubmitMessage({ message: errorMsg, isError: true }));
  })
  .finally(() => {
    store.dispatch(setSubmitStatus(false));
  })
};