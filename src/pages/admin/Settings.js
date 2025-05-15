import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AdminSettings = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Settings
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Admin settings interface will be displayed here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AdminSettings;