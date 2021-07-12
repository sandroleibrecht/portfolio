export const validateInputs = ({ name, mail, message }) => {
  const errors = {};
  errors.name = name.trim() ? false : true;
  errors.mail = mail.trim().length > 6 && mail.includes('@') && mail.includes('.') ? false : true;
  errors.message = message.trim() ? false : true;
  return errors;
};