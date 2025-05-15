import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const UserProfile = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Profile
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Your user profile will be displayed here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default UserProfile;