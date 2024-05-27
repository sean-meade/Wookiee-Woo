import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// React will only accept one module.css style import 
import styles from '../styles/UnauthenticatedLandingPage.module.css';
// React can accept multiple vanilla css import
import '../global.css';


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