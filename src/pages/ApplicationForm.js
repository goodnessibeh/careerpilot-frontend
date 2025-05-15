import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';

const ApplicationForm = () => {
  const { jobId } = useParams();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Application Form
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Job application form for job ID: {jobId} will be displayed here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ApplicationForm;