import api from './api';

// User authentication
export const login = async (credentials) => {
  try {
    const response = await api.post('/api/auth/login', credentials);
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/api/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('adminToken');
  localStorage.removeItem('isAdmin');
};

// Admin authentication
export const adminLogin = async (credentials) => {
  try {
    const response = await api.post('/api/admin/login', credentials);
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error('Admin login error:', error);
    throw error;
  }
};

// Helper functions
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken') || !!localStorage.getItem('adminToken');
};

export const isAdmin = () => {
  return !!localStorage.getItem('isAdmin') && !!localStorage.getItem('adminToken');
};