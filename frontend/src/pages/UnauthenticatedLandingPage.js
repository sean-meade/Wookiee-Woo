import React from 'react';
import '../styles/UnauthenticatedLandingPage.css';

const UnauthorisedLandingPage = () => {
  return (
    <div className="landingPageContainer">

      <div className="main-content">

        <h1>Welcome to Wookie Woo</h1>
        <p>The Coding Wookie Woo Resistance</p>
        <div className="landing-page-video"> {/* video placeholder */} </div>
        <p>Sign in or sign up to get started!</p>
      </div>
    </div>
  );
};

export default UnauthorisedLandingPage;
