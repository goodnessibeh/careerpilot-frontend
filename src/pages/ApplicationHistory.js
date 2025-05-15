import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ApplicationHistory = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Application History
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Your job application history will be displayed here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ApplicationHistory;