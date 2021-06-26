import React from "react";
import Homepage from "./pages/Homepage";
import ProjectDetails from "./pages/ProjectDetails";
import ReactPlayground from "./pages/ReactPlayground";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Homepage/>
      <ProjectDetails/>
      <ReactPlayground/>
      <ContactPage/>
    </div>
  );
};

export default App;