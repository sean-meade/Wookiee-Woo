import React from "react";
import MatchComponent from "./matchComponents/MatchComponent.js";
import MatchDetailComponent from "./matchComponents/MatchDetailComponent.js";
import MatchListComponent from "./matchComponents/MatchListComponent.js";
import UserComponent from "./matchComponents/UserComponent.js";
import "../../global.css";
import styles from "../../styles/MatchPage.module.css"

const MatchPage = () => {

    return(<>
    <div className={styles.MatchPageContainer}>
        <p>Skeleton for MatchPage.js</p>
        <ul>
            <li>
                <MatchComponent />
            </li>
            <li>
                <MatchDetailComponent />
            </li>
            <li>
                <MatchListComponent />
            </li>
            <li>
                <UserComponent />
            </li>
        </ul>
    </div>
    </>);
};

export default MatchPage;
