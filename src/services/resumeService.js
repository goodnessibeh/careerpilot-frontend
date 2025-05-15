import api from './api';

const resumeService = {
  // Upload resume file
  uploadResume: async (formData) => {
    const response = await api.post('/user/resume/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Get current resume data
  getResume: async () => {
    const response = await api.get('/user/resume');
    return response.data;
  },

  // Get resume analysis/improvements
  getResumeAnalysis: async () => {
    const response = await api.get('/user/resume/analysis');
    return response.data;
  },

  // Delete existing resume
  deleteResume: async () => {
    const response = await api.delete('/user/resume');
    return response.data;
  }
};

export default resumeService;