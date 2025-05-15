import api from './api';

// User authentication
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('userId', response.data.userId || '');
      localStorage.setItem('isAdmin', 'false');
    }
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const logout = (isAdminLogout = false) => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('adminToken');
  localStorage.removeItem('isAdmin');
  localStorage.removeItem('userId');
};

// Admin authentication
export const adminLogin = async (credentials) => {
  try {
    const response = await api.post('/admin/login', credentials);
    if (response.data.token) {
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('isAdmin', 'true');
    }
    return response.data;
  } catch (error) {
    console.error('Admin login error:', error);
    throw error;
  }
};

// Helper functions
export const getUserProfile = async () => {
  try {
    const response = await api.get('/user/profile');
    return response.data;
  } catch (error) {
    console.error('Get user profile error:', error);
    throw error;
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    const response = await api.put('/user/profile', profileData);
    return response.data;
  } catch (error) {
    console.error('Update user profile error:', error);
    throw error;
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken') || !!localStorage.getItem('adminToken');
};

export const isAdmin = () => {
  return localStorage.getItem('isAdmin') === 'true' && !!localStorage.getItem('adminToken');
};

export const getUserId = () => {
  return localStorage.getItem('userId') || null;
};