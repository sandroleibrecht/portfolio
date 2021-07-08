// Action Creators
export const setFocus = ( status ) => {
  return{
    type: 'SET_FOCUS',
    payload: { status }
  }
};

// Reducer
const initialState = { formFocusing: false };
const ContactReducer = ( state = initialState, action ) => {
  switch( action.type ){
    case 'SET_FOCUS':
      return { ...state, formFocusing: action.payload.status };
    default:
      return { ...state };
  }
};

export default ContactReducer;