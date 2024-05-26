import React from "react";
import MatchComponent from "./matchComponents/MatchComponent.js";
import MatchDetailComponent from "./matchComponents/MatchDetailComponent.js";
import MatchListComponent from "./matchComponents/MatchListComponent.js";
import UserComponent from "./matchComponents/UserComponent.js";

const MatchPage = () => {

    return(<>
        <h1>Skeleton for MatchPage.js</h1>
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

    </>);
};

export default MatchPage;
