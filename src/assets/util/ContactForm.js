// Redux
import { store } from '../../index';
import { setSubmitStatus, setSubmitMessage, resetValues }  from '../../state/contactState';

//const awsLambdaURL = process.env.REACT_APP_LAMBDA_URL;

export const validateInputs = ({ name, mail, message }) => {
  const errors = {};
  errors.name = name.trim() ? false : true;
  errors.mail = mail.trim().length > 6 && mail.includes('@') && mail.includes('.') ? false : true;
  errors.message = message.trim() ? false : true;
  return errors;
};

/* export const sendEmail = (formData, { errorMsg, noErrorMsg }) => {
  store.dispatch(setSubmitStatus(true));

  const name    = formData.name.value;
  const mail    = formData.mail.value;
  const message = formData.message.value;
  const data = { name, mail, message };

  fetch(awsLambdaURL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    body: JSON.stringify(data)
  })
  .then( res => {
  if(!res.ok){
    store.dispatch(setSubmitMessage({ message: errorMsg, isError: true }))
  }
  store.dispatch(setSubmitMessage({ message: noErrorMsg, isError: false }));
  store.dispatch(resetValues());
  })
  .catch( err => {
    store.dispatch(setSubmitMessage({ message: errorMsg, isError: true }));
  })
  .finally(() => {
    store.dispatch(setSubmitStatus(false));
  });
}; */

export const sendEmailNetlify = (event, noErrorMsg) => {
  event.preventDefault();

  const form = event.target;

  store.dispatch(setSubmitStatus(true));
  store.dispatch(setSubmitMessage({ message: noErrorMsg, isError: false }));
  store.dispatch(resetValues());
  store.dispatch(setSubmitStatus(false));

  form.submit();
};
