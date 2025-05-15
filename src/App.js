import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

// Auth components and helpers
import { isAuthenticated, isAdmin } from './services/authService';
import Layout from './components/Layout';
import AdminLayout from './components/admin/AdminLayout';

// User Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import JobSearch from './pages/JobSearch';
import ApplicationForm from './pages/ApplicationForm';
import ApplicationHistory from './pages/ApplicationHistory';
import UserProfile from './pages/UserProfile';
import ResumeUpload from './pages/ResumeUpload';
import Settings from './pages/Settings';

// Admin Pages
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import AdminSettings from './pages/admin/Settings';

// Protected route wrapper for user routes with Layout
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return <Layout>{children}</Layout>;
};

// Protected route wrapper for admin routes with AdminLayout
const AdminRoute = ({ children }) => {
  if (!isAdmin()) {
    return <Navigate to="/admin/login" />;
  }
  return <AdminLayout>{children}</AdminLayout>;
};

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Protected user routes - wrapped in Layout component */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/jobs" element={
          <ProtectedRoute>
            <JobSearch />
          </ProtectedRoute>
        } />
        <Route path="/apply/:jobId" element={
          <ProtectedRoute>
            <ApplicationForm />
          </ProtectedRoute>
        } />
        <Route path="/applications" element={
          <ProtectedRoute>
            <ApplicationHistory />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } />
        <Route path="/resume" element={
          <ProtectedRoute>
            <ResumeUpload />
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
        
        {/* Admin routes - wrapped in AdminLayout component */}
        <Route path="/admin/dashboard" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />
        <Route path="/admin/users" element={
          <AdminRoute>
            <UserManagement />
          </AdminRoute>
        } />
        <Route path="/admin/settings" element={
          <AdminRoute>
            <AdminSettings />
          </AdminRoute>
        } />
        
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Box>
  );
}

export default App;