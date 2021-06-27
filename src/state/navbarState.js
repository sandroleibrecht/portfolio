// Action Creator
export const setNavOpen = () => {
  return{
    type: 'NAV_OPEN'
  };
};
export const setNavClose = () => {
  return{
    type: 'NAV_CLOSE'
  };
};

// Reducer
const initialState = { menuOpen: false };
const NavbarReducer = ( state = initialState, action ) => {
  switch( action.type ){
    case 'NAV_OPEN':
      return { ...state, menuOpen: true };
    case 'NAV_CLOSE':
      return { ...state, menuOpen: false };
    default:
      return state;
  };
};

export default NavbarReducer;