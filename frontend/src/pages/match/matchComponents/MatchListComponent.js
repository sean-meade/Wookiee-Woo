import React from "react";
import "../../../global.css";
import styles from "../../../styles/MatchListComponent.module.css";
import MatchComponent from "./MatchComponent";

const MatchListComponent = () => {

    return(<>
    <div className={styles.MatchListComponentContainer}>
        <MatchComponent IsList/>
        <MatchComponent IsList/>
        <MatchComponent IsList/>
        <MatchComponent IsList/>
        <MatchComponent IsList/>
        <MatchComponent IsList/>
        <MatchComponent IsList/>
        <MatchComponent IsList/>
        <MatchComponent IsList/>
    </div>
    </>);
};

export default MatchListComponent;
