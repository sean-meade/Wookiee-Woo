import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Summary of Project Setup and Configuration</h2>
          <h3 className="mt-4">Project Initialization and Setup</h3>
          <ul>
            <li>Created a new Django project and set up the project structure.</li>
            <li>Created and activated a virtual environment to manage dependencies.</li>
            <li>Installed essential packages for the project using pip:</li>
            <ul>
              <li>Django for the web framework.</li>
              <li>Django REST Framework for building REST APIs.</li>
              <li>Django REST Framework SimpleJWT for JWT authentication.</li>
              <li>Django CORS Headers for handling CORS.</li>
              <li>Psycopg2-binary for PostgreSQL database adapter.</li>
              <li>Django Environ for managing environment variables.</li>
            </ul>
          </ul>
          
          <h3 className="mt-4">Database Configuration</h3>
          <ul>
            <li>Configured Django to use django-environ to read environment variables from a .env file.</li>
            <li>Set up the settings.py to use PostgreSQL via the DATABASE_URL environment variable, with a fallback to SQLite for local development.</li>
            <li>Added code to settings.py to read the .env file and configure database settings accordingly.</li>
            <li>Added a fallback to SQLite in case of missing or faulty database details.</li>
          </ul>

          <h3 className="mt-4">Django Configuration</h3>
          <ul>
            <li>Configured settings.py to use django-environ for environment variables, including setting up SECRET_KEY, DEBUG, and ALLOWED_HOSTS.</li>
            <li>Ensured the application can fall back to SQLite if DATABASE_URL is not provided.</li>
          </ul>

          <h3 className="mt-4">Middleware and Installed Apps</h3>
          <ul>
            <li>Added necessary middleware, including CorsMiddleware for handling Cross-Origin Resource Sharing (CORS).</li>
            <li>Configured INSTALLED_APPS to include essential Django apps, REST framework, and custom apps (profiles, matchmaking, favorites).</li>
          </ul>

          <h3 className="mt-4">Authentication and Authorization</h3>
          <ul>
            <li>Set up JWT authentication using djangorestframework-simplejwt to handle secure authentication in the API.</li>
            <li>Configured REST framework settings in settings.py to use JWT for authentication.</li>
          </ul>

          <h3 className="mt-4">Frontend Configuration</h3>
          <ul>
            <li>You are currently reading the landingpage in the frontend-folder defined in app.js</li>
            <li>Added a folder for pages and a components folder to the frontend.</li>
          </ul>
          
          <h3 className="mt-4">Bootstrap Installation</h3>
          <ul>
            <li>Installed Bootstrap for styling:</li>
            <ul>
              <li>Run <code>npm install bootstrap</code> to install Bootstrap in the React project.</li>
              <li>Imported Bootstrap CSS in the main JavaScript file.</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
