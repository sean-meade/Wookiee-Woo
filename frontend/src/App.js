import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profiles from './pages/ProfilePage/Profile';
import PageNotFound from './pages/PageNotFound';

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
