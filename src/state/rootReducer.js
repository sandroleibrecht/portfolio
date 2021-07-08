import { combineReducers } from "redux";
import NavbarReducer from './navbarState';
import LanguageReducer from "./languageState";
import ContactReducer from "./contactState";

const rootReducer = combineReducers(
  {
    navbar: NavbarReducer,
    language: LanguageReducer,
    contact: ContactReducer
  }
);

export default rootReducer;