import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { login } from '../services/authService';

const Login = () => {
  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials);
      // Store authentication token or user data in localStorage/context
      localStorage.setItem('authToken', response.token);
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error(error.response?.data?.message || 'Login failed. Please try again.');
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
          CareerPilot
        </Typography>
        <Typography variant="h6" component="p" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Your AI-powered job application assistant
        </Typography>
        
        <LoginForm onLogin={handleLogin} />
      </Box>
    </Container>
  );
};

export default Login;