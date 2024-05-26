import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UnauthenticatedLandingPage.module.css';

const UnauthorisedLandingPage = () => {
  return (
    <div>
      <div className={styles.landing-page-container}>
        <div className={styles.landing-page-content}>
          <h1>Welcome Wookie Woo</h1>
          <p>Where you find your perfect match in a galaxy of singles!</p>
          <div className={styles.landing-page-video}> // video placeholder
          </div>
          <p>Sign in or sign up to get started!</p>
        </div>
      </div>
    </div>
  );
};

export default UnauthorisedLandingPage;