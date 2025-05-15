import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const UserManagement = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Management
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          User management interface will be displayed here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default UserManagement;