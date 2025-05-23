import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" component="h2">
              Recent Applications
            </Typography>
            <Typography variant="body1">
              Your recent job applications will appear here.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" component="h2">
              Application Status
            </Typography>
            <Typography variant="body1">
              Track the status of your job applications here.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" component="h2">
              Recommended Jobs
            </Typography>
            <Typography variant="body1">
              Job recommendations based on your profile will appear here.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;