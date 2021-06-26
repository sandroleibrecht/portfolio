import React from "react";
// Theme
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Cleanup</div>
    </ThemeProvider>
  );
};

export default App;