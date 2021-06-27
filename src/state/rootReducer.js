import { combineReducers } from "redux";
import NavbarReducer from './navbarState';
import LanguageReducer from "./languageState";

const rootReducer = combineReducers(
  {
    navbar: NavbarReducer,
    language: LanguageReducer
  }
);

export default rootReducer;