// Redux
import { store } from '../../index';
import { setSubmitStatus, setSubmitMessage, resetValues }  from '../../state/contactState';

// .env Lambda URL
const awsLambdaURL = process.env.LAMBDA_URL;

export const validateInputs = ({ name, mail, message }) => {
  const errors = {};
  errors.name = name.trim() ? false : true;
  errors.mail = mail.trim().length > 6 && mail.includes('@') && mail.includes('.') ? false : true;
  errors.message = message.trim() ? false : true;
  return errors;
};

export const sendEmail = (formData, { errorMsg, noErrorMsg }) => {
  store.dispatch(setSubmitStatus(true));

  const endpoint = awsLambdaURL;
  const name    = formData.name.value;
  const mail    = formData.mail.value;
  const message = formData.message.value;
  const data = { name, mail, message };

  const fetchPromise = fetch(endpoint, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    body: JSON.stringify(data)
  });

  fetchPromise
    .then( res => {
    console.log(res);
    store.dispatch(setSubmitMessage({ message: noErrorMsg, isError: false }));
    store.dispatch(resetValues());
    })
    .catch( err => {
      store.dispatch(setSubmitMessage({ message: errorMsg, isError: true }));
    })
    .finally(() => {
      store.dispatch(setSubmitStatus(false));
    });
};