import React from "react";


const PageNotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>This is not the page you are looking for.</p>
            <Link to="/">
                Go back to Home
            </Link>
        </div>
    );
};

export default PageNotFound;