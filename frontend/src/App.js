import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profiles from './pages/ProfilePage/Profile';
import UnauthLandingPage from './pages/UnauthLandingPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/unauthlandingpage" element={<UnauthLandingPage />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/" element={
          <div>
            <div className="App-container">
              <div className="Nav-bar-container">
                <NavBar />
              </div>
              <div className="Main-view-container">
                <p>This is a placeholder text for Main view container. This container will render:</p>
                <ul>
                  <li>landing page unauthenticated</li>
                  <li>landing page authenticated</li>
                  <li>authentication sign in, out, up</li>
                  <li>edit profile</li>
                  <li>...and more</li>
                </ul>
              </div>
            </div>
          </div>
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
