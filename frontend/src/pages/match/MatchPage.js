import React, { useState } from "react";
import MatchComponent from "./matchComponents/MatchComponent.js";
import UserComponent from "./matchComponents/UserComponent.js";
import "../../global.css";
import styles from "../../styles/MatchPage.module.css"

const MatchPage = () => {

    return(<>
    <div className={styles.MatchPageContainer}>
        <div className={styles.UserContainer}>
            <UserComponent />
        </div>
        <div className={styles.MatchContainer}>
            <MatchComponent />
        </div>
    </div>
    </>);
};

export default MatchPage;
