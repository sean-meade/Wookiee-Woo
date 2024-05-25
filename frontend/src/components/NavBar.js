import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import styles from '../styles/NavBar.module.css';
import AuthContext from '../auth/authcontext';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogout = () => {
    logout();
    setExpanded(false);
  };

  const authenticatedOptions = (
    <>
      <NavLink to={`/profiles/${user ? user.id : ''}`} className={styles.NavBarButton}>
        Profile Detail
      </NavLink>
      <br />
      <br />
      <NavLink to="/profiles" className={styles.NavBarButton}>
        All Profiles
      </NavLink>
      <br />
      <br />
      <NavLink to="/" onClick={handleLogout} className={styles.NavBarButton}>
        Sign Out
      </NavLink>
      <br />
      <br />
    </>
  );

  const unauthenticatedOptions = (
    <>
      <NavLink to="/login" className={styles.NavBarButton}>
        Sign In
      </NavLink>
      <br />
      <br />
      <NavLink to="/register" className={styles.NavBarButton}>
        Sign Up
      </NavLink>
      <br />
      <br />
    </>
  );

  return (
    <>
      <Navbar expanded={expanded} className={styles.LogoToCollapseDirection} expand="md">
        <Navbar.Brand className={styles.NavBarLogo}>Logo</Navbar.Brand>

        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.LogoToCollapseDirection}>
          <Nav className={styles.NavBarDirection}>
            <ul>
              <NavLink to="/" className={styles.NavBarButton}>
                Home
              </NavLink>
              <br />
              <br />
              <NavLink to="/profiles" className={styles.NavBarButton}>
                Profiles
              </NavLink>
              <br />
              <br />
              {user ? authenticatedOptions : unauthenticatedOptions}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
