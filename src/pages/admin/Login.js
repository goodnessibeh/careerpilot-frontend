import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import LoginForm from '../../components/LoginForm';
import { adminLogin } from '../../services/authService';

const AdminLogin = () => {
  const handleLogin = async (credentials) => {
    try {
      const response = await adminLogin(credentials);
      // Store authentication token or user data in localStorage/context
      localStorage.setItem('adminToken', response.token);
      localStorage.setItem('isAdmin', 'true');
      return response;
    } catch (error) {
      console.error('Admin login failed:', error);
      throw new Error(error.response?.data?.message || 'Admin login failed. Please check your credentials.');
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        py: 4
      }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          CareerPilot Admin
        </Typography>
        <Typography variant="h6" component="p" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Administrative Dashboard
        </Typography>
        
        <LoginForm onLogin={handleLogin} isAdmin={true} />
      </Box>
    </Container>
  );
};

export default AdminLogin;