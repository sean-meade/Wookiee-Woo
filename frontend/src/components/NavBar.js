import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
//import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import styles from "../styles/NavBar.module.css";
// authentication import goes here

const NavBar = () => {
    // authentication as useState is temporary:
    // eslint-disable-next-line
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const authenticatedOptions = (<>
        <NavLink
        to="/profiles"
        className={styles.NavBarButton}
        >
            My profile
        </NavLink><br/><br/>
        <NavLink
        to="/sign-out"
        className={styles.NavBarButton}
        >
            Sign out
        </NavLink><br/><br/>
    </>)

    const unauthenticatedOptions = (<>
        <NavLink
        to="/sign-in"
        className={styles.NavBarButton}
        >
            Sign in
        </NavLink><br/><br/>
        <NavLink
        to="/sign-up"
        className={styles.NavBarButton}
        >
            Sign up
        </NavLink><br/><br/>
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


                    <Nav className={styles.NavBarDirection}>
                        <ul>
                        <br/>
                        <NavLink
                        to="/profiles"
                        className={styles.NavBarButton}
                        >
                            profiles
                        </NavLink><br/><br/>
                        <NavLink
                        to="/"
                        className={styles.NavBarButton}
                        >
                            home
                        </NavLink><br/><br/>
                        {isAuthenticated ? (authenticatedOptions) : (unauthenticatedOptions)}
                        </ul>
                    </Nav>


                </Navbar.Collapse>

        </Navbar>
    </>);
};

export default NavBar;
