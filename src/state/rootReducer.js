import { combineReducers } from "redux";
import NavbarReducer from './navbarState';

const rootReducer = combineReducers(
  {
    navbar: NavbarReducer
  }
);

export default rootReducer;