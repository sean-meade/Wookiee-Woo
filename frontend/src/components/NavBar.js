import React from "react";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
// authentication import goes here

const NavBar = () => {

    return(<>
        <Nav>
            <NavLink to="/profiles">/profiles</NavLink>
        </Nav>
    </>);
};

export default NavBar;
