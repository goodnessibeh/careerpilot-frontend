import React from 'react';
import { Box, Container } from '@mui/material';
import AdminNavbar from './AdminNavbar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default AdminLayout;