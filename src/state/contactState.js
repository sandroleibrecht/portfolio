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
  }
};
const ContactReducer = ( state = initialState, action ) => {
  const data = action.payload;
  switch( action.type ){
    case 'SET_FOCUS':
      return { ...state, formFocusing: data.status };
    case 'SET_VALUE':
      return { ...state, values: { ...state.values, [data.prop]: data.value }};
    case 'RESET_VALUES':
      return { ...state, values: initialState.values };
    default:
      return { ...state };
  }
};

export default ContactReducer;