import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  TextField, 
  Button, 
  Grid, 
  CircularProgress, 
  Chip,
  Card, 
  CardContent, 
  CardActions,
  Divider,
  Autocomplete
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import jobService from '../services/jobService';

// Common job locations for autocomplete
const commonLocations = [
  'Remote',
  'New York, NY',
  'San Francisco, CA',
  'Seattle, WA',
  'Austin, TX',
  'Chicago, IL',
  'Boston, MA',
  'Los Angeles, CA',
  'Denver, CO',
  'Atlanta, GA',
  'Washington, DC',
  'Dallas, TX',
  'Miami, FL',
  'Portland, OR',
  'Philadelphia, PA'
];

const JobSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!keyword) {
      setError('Please enter a keyword to search for jobs');
      return;
    }

    setLoading(true);
    setError('');
    setJobs([]);
    setSearched(true);

    try {
      // Call the search API with the provided parameters
      const response = await jobService.searchJobs({ 
        keyword, 
        location
      });
      
      // Set the jobs in state, handling both possible API response formats
      const jobList = response.jobs || [];
      setJobs(jobList);
      
      // Show error message if no jobs found
      if (jobList.length === 0) {
        setError('No jobs found. Try a different search term or location.');
      }
    } catch (err) {
      console.error('Job search error:', err);
      setError(err.response?.data?.message || 'Error searching for jobs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const truncateDescription = (description, maxLength = 200) => {
    if (!description) return '';
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Job Search
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              label="Job Title, Keywords, or Company"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g. Software Engineer, Marketing, Amazon"
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Autocomplete
              freeSolo
              options={commonLocations}
              value={location}
              onChange={(e, newValue) => setLocation(newValue || '')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Location"
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="e.g. Remote, New York, San Francisco"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        <LocationOnIcon sx={{ color: 'action.active', mr: 1 }} />
                        {params.InputProps.startAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary" 
              onClick={handleSearch}
              disabled={loading}
              sx={{ height: '56px' }}
            >
              {loading ? <CircularProgress size={24} /> : 'Search Jobs'}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {searched && jobs.length > 0 && (
            <Typography variant="h6" sx={{ mb: 2 }}>
              Found {jobs.length} jobs matching your search
            </Typography>
          )}
          
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid item xs={12} key={job.id}>
                <Card sx={{ boxShadow: 2 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={8}>
                        <Typography variant="h6" component="h2" gutterBottom>
                          {job.title}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <BusinessIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body1" color="text.secondary">
                            {job.company}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {job.location || 'Location not specified'}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {job.job_type && (
                            <Chip
                              icon={<WorkIcon />}
                              label={job.job_type}
                              size="small"
                              variant="outlined"
                            />
                          )}
                          
                          {job.posted_date && (
                            <Chip
                              icon={<AccessTimeIcon />}
                              label={job.posted_date}
                              size="small"
                              variant="outlined"
                            />
                          )}
                          
                          {job.salary && (
                            <Chip
                              icon={<MonetizationOnIcon />}
                              label={job.salary}
                              size="small"
                              variant="outlined"
                            />
                          )}
                          
                          {job.source && (
                            <Chip
                              label={job.source}
                              size="small"
                              variant="outlined"
                              color="primary"
                            />
                          )}
                        </Box>
                        
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            {truncateDescription(job.description)}
                          </Typography>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Box sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          height: '100%', 
                          justifyContent: 'space-between' 
                        }}>
                          {job.match_score !== undefined && (
                            <Box sx={{ mb: 2 }}>
                              <Typography variant="subtitle2" gutterBottom>
                                Match Score
                              </Typography>
                              <Box 
                                sx={{ 
                                  position: 'relative', 
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  mb: 1
                                }}
                              >
                                <CircularProgress 
                                  variant="determinate" 
                                  value={job.match_score} 
                                  size={56}
                                  thickness={4}
                                  sx={{ 
                                    color: job.match_score > 70 ? 'success.main' : 
                                           job.match_score > 40 ? 'warning.main' : 'error.main'
                                  }}
                                />
                                <Box
                                  sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Typography
                                    variant="caption"
                                    component="div"
                                    sx={{ fontWeight: 'bold' }}
                                  >
                                    {`${Math.round(job.match_score)}%`}
                                  </Typography>
                                </Box>
                              </Box>
                              
                              {job.match_reasons && (
                                <Box sx={{ mt: 1 }}>
                                  <Typography variant="caption" color="text.secondary">
                                    {Array.isArray(job.match_reasons) 
                                      ? job.match_reasons[0] 
                                      : typeof job.match_reasons === 'string'
                                        ? job.match_reasons
                                        : 'Good match for your search'}
                                  </Typography>
                                </Box>
                              )}
                            </Box>
                          )}
                          
                          <Box sx={{ mt: 'auto' }}>
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ mb: 1 }}
                            >
                              Apply Now
                            </Button>
                            
                            <Button
                              fullWidth
                              variant="outlined"
                              startIcon={<DescriptionIcon />}
                              onClick={() => {/* View details functionality */}}
                            >
                              View Details
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default JobSearch;