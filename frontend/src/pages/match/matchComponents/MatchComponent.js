import React from "react";
import "../../../global.css";
import styles from "../../../styles/MatchComponent.module.css";
import { Link, useParams } from "react-router-dom";

// I've put ?? above models I don't know if they belong here / Alma

const MatchComponent = (props) => {
    const { id } = useParams();
    const {
        // Anything from the API profiles.models.py will be in this dictionary
        user,
        force_alignment,
        gender,
        looking_for,
        profile_icon,
        bio,
        // ?? suggestions
        suggestions,
        // ?? matches
        matches,
        facebook,
        instagram,
        twitter,
        // These are not from the API, they help telling React what to render
        IsList,
        IsDetail,
    } = props;

    return(<>
    <div className={styles.MatchComponentContainer}>

        {IsList ? (<>
        <div className={styles.IsListContainer}>
            <h1>{`
            ${user || 'No name'}`}</h1>

            <p>{`Gender:
            ${gender || 'Not specified'}`}</p>

            <p>{`Looking for:
            ${looking_for || 'Not specified'}`}</p>
            <Link className={styles.DetailsLink} to={`/match/${id}`}>Details {id}</Link>
        </div>
        </>) : (null)}

        { id !== "_" ? (<>
            {IsDetail ? (<>
                <div className={styles.IsDetailContainer}>
                    <h1>{`
                    ${user || 'No name'}`}</h1>

                    <p>{`Gender:
                    ${gender || 'Not specified'}`}</p>

                    <p>{`Looking for:
                    ${looking_for || 'Not specified'}`}</p>

                    <p>{`Force alignment:
                    ${force_alignment || 'No alignment'}`}</p>

                    <img src={profile_icon} alt={<p>Profile icon</p>}/>

                    <p>{`
                    ${bio || ''}`}</p>

                    <p>{`suggestions:
                    ${suggestions || 'No suggestions'}`}</p>

                    <p>{`matches:
                    ${matches || 'No matches'}`}</p>

                    <p>{`facebook:
                    ${facebook || ''}`}</p>

                    <p>{`instagram:
                    ${instagram || ''}`}</p>

                    <p>{`X (twitter):
                    ${twitter || ''}`}</p>
                </div>
                </>) : (null)}
        </>) : (null)}


    </div>
    </>);
};

export default MatchComponent;
