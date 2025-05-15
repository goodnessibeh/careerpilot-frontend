import React from 'react';
import { useParams } from 'react-router-dom';

const ApplicationForm = () => {
  const { jobId } = useParams();
  
  return (
    <div>
      <h1>Application Form</h1>
      <p>Fill out this application form for job ID: {jobId}</p>
    </div>
  );
};

export default ApplicationForm;