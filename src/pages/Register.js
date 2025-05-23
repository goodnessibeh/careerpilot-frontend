import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Register = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Registration form will be displayed here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;