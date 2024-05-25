// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
    <AuthProvider>
      <Router>
        <div className="App-container">
          <div className="Nav-bar-container">
            <NavBar />
          </div>
          <div className="Main-view-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/users/:id" element={<UserDetail />} />
              <Route path="/profiles" element={<ProfileList />} />
              <Route path="/profiles/:id" element={<ProfileDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
