import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth/authcontext'; 
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import styles from "../styles/Login.module.css";
import "../global.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className={styles.LoginContainer}>
      <h1 className={styles.Header}>Sign in</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label className={styles.FormLabel}></Form.Label>
          <Form.Control
            className={styles.FormControl}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <br/>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label className={styles.FormLabel}></Form.Label>
          <Form.Control
            className={styles.FormControl}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>
        <button type="submit" className={styles.Button}>
          Sign in
        </button>
      </Form>
    </div>
  );
};

export default Login;
