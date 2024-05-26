import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../UnauthenticatedLandingPage.module.css';
import styles from '../styles/AuthenticatedLandingPage.module.css';


const UnauthorisedLandingPage = () => {
  return (
    <div>
      <div className={styles.landingPageContainer}>
        <div className={styles.landingPageContent}>
          <h1>Welcome Wookie Woo</h1>
          <p>Where you find your perfect match in a galaxy of singles!</p>
          <div className={styles.landingPageVideo}> // video placeholder
          </div>
          <p>Sign in or sign up to get started!</p>
        </div>
      </div>
    </div>
  );
};

export default UnauthorisedLandingPage;