import { store } from '../../index';
import { setSubmitStatus, setSubmitMessage, resetValues }  from '../../state/contactState';

export const validateInputs = ({ name, mail, message }) => {
  const errors = {};
  errors.name = name.trim() ? false : true;
  errors.mail = mail.trim().length > 6 && mail.includes('@') && mail.includes('.') ? false : true;
  errors.message = message.trim() ? false : true;
  return errors;
};

// Sending form data (currently hooked up to netlify form detection)
export const sendEmail = (e, okMsg, notOkMsg) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      store.dispatch(setSubmitMessage({ message: okMsg, isError: false }));
      store.dispatch(resetValues());
    })
    .catch(() => {
      store.dispatch(setSubmitMessage({ message: notOkMsg, isError: true }));
    })
    .finally(() => {
      store.dispatch(setSubmitStatus(false));
    });
};
