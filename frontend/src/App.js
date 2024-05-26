// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import Profiles from './pages/ProfilePage/Profile';
import PageNotFound from './pages/PageNotFound';
import UnauthenticatedLandingPage from './pages/UnauthenticatedLandingPage';
import UserDetail from './components/UserDetail';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './auth/authcontext';
import SurveyProviderWrapper from './providers/SurveyProviderWrapper';
import Home from './components/Home';
import StarWarsSurvey from './pages/MatchMakingPage/MatchMakingPage';
import AuthenticatedLandingPage from './pages/AuthenticatedLandingPage';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App-container">
        <div className="Nav-bar-container">
          <NavBar />
        </div>
        <div className="Main-view-container">
      <Routes>
        <Route path="/unauthenticatedlandingpage" element={<UnauthenticatedLandingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<p>Landing page</p>} />
        <Route path="/landing" element={<AuthenticatedLandingPage />} />
        <Route path="/survey" element={<SurveyProviderWrapper />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-out" element={<p>Sign out page</p>} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profiles/:id" element={<ProfileDetails />} />
        <Route path="/survey/" element={<StarWarsSurvey />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
        </div>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
