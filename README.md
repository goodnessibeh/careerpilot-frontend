# CareerPilot Frontend

React frontend for the CareerPilot job application automation platform.

## Features

- User authentication and profile management
- Resume upload and parsing
- Job search and application tracking
- Application history and analytics
- Admin dashboard for system management

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a .env file with your backend API URL:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

3. Start the development server:
   ```
   npm start
   ```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Runs the test suite
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Deployment

This application is configured for deployment to Heroku with the following buildpacks:
- heroku/nodejs
- https://github.com/heroku/heroku-buildpack-static.git

## Environment Variables

For production deployment, set:
```
REACT_APP_API_URL=https://careerpilot-ai-530f45da3f80.herokuapp.com/api
```