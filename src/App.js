import React from "react";
// Global Styling
import GlobalStyles from './GlobalStyles';
// Pages
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetails from "./pages/ProjectDetails";
// Components
import Navbar from "./components/Navbar";
// ROUTER
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Switch location={location}>
        <Route path='/' exact >
          <AboutPage/>
        </Route>
        <Route path='/projects' exact >
          <ProjectsPage/>
        </Route>
        <Route path='/projects/:id' >
          <ProjectDetails/>
        </Route>
        <Route path='/contact'>
          <ContactPage/>
        </Route>
      </Switch>
    </>
  );
};

export default App;