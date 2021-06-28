// Action Creators
export const setLanguage = ( language ) => {
  return{
    type: 'SET_LANGUAGE',
    payload: { language }
  }
};

// Reducer
const localStoreLanguage = localStorage.getItem('spReactPortfolio_Language') || 'en';
const initialState = { selectedLanguage: localStoreLanguage };

const LanguageReducer = ( state = initialState, action ) => {
  switch( action.type ){
    case 'SET_LANGUAGE':
      return { ...state, selectedLanguage: action.payload.language };
    default:
      return { ...state };
  }
};

export default LanguageReducer;