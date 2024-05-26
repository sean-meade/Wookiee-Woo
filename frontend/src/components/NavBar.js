
import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import styles from "../styles/NavBar.module.css";
import '../global.css';
import logo from'../assets/wookie-woo-logo.png';
import AuthContext from '../auth/authcontext';


const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

// handleLogout was brought from main branch while resolving conflicts 
    const handleLogout = () => {
        logout();
        setExpanded(false);
  };
  
    const authenticatedOptions = (<>
        <NavLink
        to="/profiles"
        className={styles.NavBarButton}
        activeClassName={styles.Active}
        >
            My profile
        </NavLink><br/><br/>
        <div
        className={styles.NavBarButton}
        onClick={handleLogout}
        >
            Sign out
        </div><br/><br/>
    </>)

    const unauthenticatedOptions = (<>
        <NavLink
        to="/sign-in"
        className={styles.NavBarButton}
        activeClassName={styles.Active}
        >
            Sign in
        </NavLink><br/><br/>
        <NavLink
        to="/sign-up"
        className={styles.NavBarButton}
        activeClassName={styles.Active}
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

            <Navbar.Brand>
                <img className={styles.NavBarLogo} src={logo} alt="logo"/>
            </Navbar.Brand>

                <Navbar.Toggle
                className={styles.CollapseButton}
                ref={ref}
                onClick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse
                className={styles.LogoToCollapseDirection}
                >


                    <Nav className={styles.NavBarDirection}>
                        <ul>
                        <br/>
                        <NavLink
                        to="/profiles"
                        className={styles.NavBarButton}
                        activeClassName={styles.Active}
                        >
                            profiles
                        </NavLink><br/><br/>
                        <NavLink
                        to="/"
                        className={styles.NavBarButton}
                        activeClassName={styles.Active}
                        >
                            home
                        </NavLink><br/><br/>
                        {user ? (authenticatedOptions) : (unauthenticatedOptions)}
                        </ul>
                    </Nav>


                </Navbar.Collapse>

        </Navbar>
    </>);
};

export default NavBar;
