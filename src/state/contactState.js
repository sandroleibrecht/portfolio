// Action Creators
export const setFocus = ( status ) => {
  return{
    type: 'SET_FOCUS',
    payload: { status }
  }
};
export const setValue = ( prop, value ) => {
  prop = prop.toLowerCase();
  return{
    type: 'SET_VALUE',
    payload: { prop, value }
  }
};
export const setErrors = ( errors ) => {
  return{
    type: 'SET_ERRORS',
    payload: { errors }
  }
};
export const setSubmitStatus = ( status ) => {
  return{
    type: 'SET_SUBMISSION',
    payload: { status }
  }
};
export const setSubmitMessage = ( messageData ) => {
  return{
    type: 'SET_MESSAGE',
    payload: { messageData }
  }
};
export const resetValues = () => {
  return { type: 'RESET_VALUES' };
};

// Reducer
const initialState = {
  formFocusing: false,
  values: {
    name: '',
    mail: '',
    message: ''
  },
  errors: {
    name: false,
    mail: false,
    message: false
  },
  isSubmitting: false,
  submitMessage: {
    message: '',
    isError: false
  }
};
const ContactReducer = ( state = initialState, action ) => {
  const data = action.payload;
  switch( action.type ){
    case 'SET_FOCUS':
      return { ...state, formFocusing: data.status };
    case 'SET_VALUE':
      return { ...state, values: { ...state.values, [data.prop]: data.value }};
    case 'SET_ERRORS':
      return { ...state, errors: data.errors };
    case 'SET_SUBMISSION':
      return { ...state, isSubmitting: data.status };
    case 'SET_MESSAGE':
      return { ...state, submitMessage: data.messageData };
    case 'RESET_VALUES':
      return { ...state, values: initialState.values };
    default:
      return { ...state };
  }
};

export default ContactReducer;