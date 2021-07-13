import { combineReducers } from "redux";
import NavbarReducer from './navbarState';
import LanguageReducer from "./languageState";
import ContactReducer from "./contactState";
import ProjectsReducer from "./projectsState";

const rootReducer = combineReducers(
  {
    navbar: NavbarReducer,
    language: LanguageReducer,
    contact: ContactReducer,
    projects: ProjectsReducer
  }
);

export default rootReducer;