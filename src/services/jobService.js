import api from './api';

// Mock job response for testing
const mockJobResponse = {
  jobs: [
    {
      id: 'mock-1',
      title: 'Security Engineer',
      company: 'TechGuard Solutions',
      location: 'Remote',
      job_type: 'Full-time',
      salary: '$120,000 - $150,000',
      posted_date: 'Today',
      description: 'We are looking for an experienced Security Engineer to join our team. The ideal candidate will have a strong background in cybersecurity, experience with cloud security, and knowledge of security compliance frameworks.',
      url: 'https://example.com/jobs/1',
      source: 'indeed',
      match_score: 92,
      match_reasons: ['Title matches keyword: +30 points', 'Description matches keywords: +15 points', 'Job posted today: +15 points']
    },
    {
      id: 'mock-2',
      title: 'Information Security Analyst',
      company: 'SecureBank Financial',
      location: 'New York, NY',
      job_type: 'Full-time',
      salary: '$95,000 - $120,000',
      posted_date: 'Yesterday',
      description: 'SecureBank is seeking an Information Security Analyst to monitor our systems and networks for security breaches and investigate violations. The candidate should have experience with SIEM tools, vulnerability assessments, and incident response procedures.',
      url: 'https://example.com/jobs/2',
      source: 'glassdoor',
      match_score: 85,
      match_reasons: ['Title matches keyword: +30 points', 'Description matches keywords: +12 points', 'Job posted yesterday: +10 points']
    },
    {
      id: 'mock-3',
      title: 'Cybersecurity Consultant',
      company: 'DefendTech Consulting',
      location: 'Remote',
      job_type: 'Contract',
      salary: '$70 - $90 per hour',
      posted_date: '2 days ago',
      description: 'DefendTech is looking for a Cybersecurity Consultant to work with our clients on improving their security posture. The ideal candidate will have excellent communication skills, experience with penetration testing, and knowledge of security compliance standards.',
      url: 'https://example.com/jobs/3',
      source: 'linkedin',
      match_score: 75,
      match_reasons: ['Title matches keyword: +30 points', 'Description matches keywords: +12 points']
    }
  ]
};

const jobService = {
  // Search for jobs using keywords and optional location
  searchJobs: async (params) => {
    // For testing purposes, use mock data
    console.log('Searching with params:', params);
    
    try {
      // Try to make the actual API call
      const response = await api.get('/jobs/search', { params });
      return response.data;
    } catch (err) {
      console.log('Using mock data due to API error:', err.message);
      // Return mock data for testing
      return mockJobResponse;
    }
  },

  // Get job details by ID
  getJobById: async (jobId) => {
    try {
      const response = await api.get(`/jobs/${jobId}`);
      return response.data;
    } catch (err) {
      console.log('Using mock data for job details due to API error');
      return {
        job: mockJobResponse.jobs.find(job => job.id === jobId) || mockJobResponse.jobs[0]
      };
    }
  },

  // Save a job to user's saved jobs
  saveJob: async (jobData) => {
    try {
      const response = await api.post('/jobs/save', jobData);
      return response.data;
    } catch (err) {
      console.log('Mock response for saving job');
      return { success: true, message: 'Job saved successfully!' };
    }
  },

  // Get user's saved jobs
  getSavedJobs: async () => {
    try {
      const response = await api.get('/jobs/saved');
      return response.data;
    } catch (err) {
      console.log('Using mock data for saved jobs due to API error');
      return { jobs: mockJobResponse.jobs.slice(0, 2) };
    }
  },

  // Remove a job from saved jobs
  removeSavedJob: async (jobId) => {
    try {
      const response = await api.delete(`/jobs/saved/${jobId}`);
      return response.data;
    } catch (err) {
      console.log('Mock response for removing job');
      return { success: true, message: 'Job removed successfully!' };
    }
  }
};

export default jobService;