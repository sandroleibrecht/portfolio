import React from 'react';
// Theme
import { ThemeProvider } from '@material-ui/core';
import lightTheme from '../Theme';
// Material UI Components
import Typography from '@material-ui/core/Typography';

function ProjectDetails() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Typography variant="h3">Project Details</Typography>
    </ThemeProvider>
  );
};

export default ProjectDetails;