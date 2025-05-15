import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" component="h2">
              User Statistics
            </Typography>
            <Typography variant="body1">
              Total users: Loading...
            </Typography>
            <Typography variant="body1">
              Active users: Loading...
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" component="h2">
              Application Statistics
            </Typography>
            <Typography variant="body1">
              Total applications: Loading...
            </Typography>
            <Typography variant="body1">
              Applications today: Loading...
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" component="h2">
              System Status
            </Typography>
            <Typography variant="body1">
              API Status: Online
            </Typography>
            <Typography variant="body1">
              Database: Connected
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;