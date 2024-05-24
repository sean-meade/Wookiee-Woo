import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
//import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import styles from "../styles/NavBar.module.css";
// authentication import goes here

const NavBar = () => {
    // authentication as useState is temporary:
    // eslint-disable-next-line
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const authenticatedOptions = (<>
        <NavLink
        to="/profiles"
        className={styles.NavBarButton}
        >
            My profile
        </NavLink>
        <NavLink
        to="/sign-out"
        className={styles.NavBarButton}
        >
            Sign out
        </NavLink>
    </>)

    const unauthenticatedOptions = (<>
        <NavLink
        to="/sign-in"
        className={styles.NavBarButton}
        >
            Sign in
        </NavLink>
        <NavLink
        to="/sign-up"
        className={styles.NavBarButton}
        >
            Sign up
        </NavLink>
    </>)

    return(<>
        <Navbar
        expanded={expanded}
        className={styles.LogoToCollapseDirection}
        expand="md"
        >
            <Navbar.Brand className={styles.NavBarLogo}>Logo</Navbar.Brand>

                <Navbar.Toggle
                ref={ref}
                onClick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse
                className={styles.LogoToCollapseDirection}
                id="basic-navbar-nav"
                >

                        <NavLink
                        to="/profiles"
                        className={styles.NavBarButton}
                        >
                            profiles
                        </NavLink>
                        <NavLink
                        to="/"
                        className={styles.NavBarButton}
                        >
                            home
                        </NavLink>
                        {isAuthenticated ? (authenticatedOptions) : (unauthenticatedOptions)}

                </Navbar.Collapse>

        </Navbar>
    </>);
};

export default NavBar;
