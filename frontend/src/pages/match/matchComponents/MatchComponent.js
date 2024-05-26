import React, { useState } from "react";
import "../../../global.css";
import styles from "../../../styles/MatchComponent.module.css";
import MatchDetailComponent from "./MatchDetailComponent";
import MatchListComponent from "./MatchListComponent";

const MatchComponent = () => {
    // placholder state
    // Match List if false
    // Match Detail if true
    const [toggleMatch, setToggleMatch] = useState(false);
    const handleToggle = () => {
        setToggleMatch(prevState => !prevState);
      };

    return(<>
    <div className={styles.MatchComponentContainer}>
        {toggleMatch ? (<>
        <MatchDetailComponent />
        </>) : (<>
        <MatchListComponent />
        </>)}
    </div>
    <button onClick={handleToggle}>toggle me</button>
    </>);
};

export default MatchComponent;
