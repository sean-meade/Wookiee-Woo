import React from "react";
import styles from "../styles/PageNotFound.module.css";
import { Link } from 'react-router-dom';
import '../global.css';

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>404</h1>
            <p className={styles.paragraph}>This is not the page you are looking for.</p>
            <br/>
            <Link to="/" className={styles.Link}>
                Go back to the Home Page
            </Link>
        </div>
    );
};

export default PageNotFound;