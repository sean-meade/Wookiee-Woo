import React from "react";
import "../../../global.css";
import styles from "../../../styles/MatchDetailComponent.module.css"
import MatchComponent from "./MatchComponent";

const MatchDetailComponent = () => {

    return(<>
    <div className={styles.MatchDetailComponentContainer}>
        <MatchComponent IsDetail/>
    </div>
    </>);
};

export default MatchDetailComponent;
