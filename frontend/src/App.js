import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profiles from './pages/ProfilePage/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/" element={<div>
          <div className="App-container">
            <div className="Nav-bar-container">

            </div>
            <div className="Main-view-container">

            </div>
          </div>
        </div>} />
      </Routes>
    </Router>
  );
}

export default App;
