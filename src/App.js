import React from "react";
// Framer Motion
import { AnimatePresence } from "framer-motion";
// Global Styling
import styled from "styled-components";
import GlobalStyles from './assets/styling/GlobalStyles';
// Pages
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetails from "./pages/ProjectDetails";
import PageNotFound from './pages/404';
// Components
import Navbar from "./components/navbar/Navbar";
// ROUTER
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <AppWrapper>
      <GlobalStyles/>
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact >
            <AboutPage/>
          </Route>
          <Route path='/projects' exact >
            <ProjectsPage/>
          </Route>
          <Route path='/projects/:id' exact>
            <ProjectDetails/>
          </Route>
          <Route path='/contact'>
            <ContactPage/>
          </Route>
          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
      </AnimatePresence>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export default App;
