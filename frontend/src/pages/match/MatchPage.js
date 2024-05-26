import React from "react";
import MatchListComponent from "./matchComponents/MatchListComponent.js";
import MatchDetailComponent from "./matchComponents/MatchDetailComponent.js";
import "../../global.css";
import styles from "../../styles/MatchPage.module.css"

const MatchPage = () => {

    return(<>
    <div className={styles.MatchPageContainer}>
        <div className={styles.MatchContainer}>
            <MatchListComponent />
        </div>
        <div className={styles.MatchContainer}>
            <MatchDetailComponent />
        </div>
    </div>
    </>);
};

export default MatchPage;
