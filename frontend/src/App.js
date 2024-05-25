// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProfileList from './pages/ProfileList/ProfileList';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import PageNotFound from './pages/PageNotFound';
import UserDetail from './components/UserDetail';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './auth/authcontext';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App-container">
        <div className="Nav-bar-container">
          <NavBar />
        </div>
        <div className="Main-view-container">
      <Routes>
        <Route path="/" element={<p>Landing page</p>} />
        <Route path="/sign-in" element={<p>Sign in page</p>} />
        <Route path="/sign-up" element={<p>Sign up page</p>} />
        <Route path="/sign-out" element={<p>Sign out page</p>} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
