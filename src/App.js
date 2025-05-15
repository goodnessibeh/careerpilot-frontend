import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import JobSearch from './pages/JobSearch';
import ApplicationForm from './pages/ApplicationForm';
import ApplicationHistory from './pages/ApplicationHistory';
import UserProfile from './pages/UserProfile';
import ResumeUpload from './pages/ResumeUpload';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
        <Route path="/applications" element={<ApplicationHistory />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/resume" element={<ResumeUpload />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;