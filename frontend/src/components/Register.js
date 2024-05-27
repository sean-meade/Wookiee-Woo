// src/components/Register.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth/authcontext';
import { Form, Button, Container, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import styles from "../styles/Register.module.css";
import "../global.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('danger');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setToastMessage('Passwords do not match');
      setToastVariant('danger');
      setShowToast(true);
      return;
    }
    try {
      await register(username, email, password, password2);
      setToastMessage('Registration successful! Redirecting to login...');
      setToastVariant('success');
      setShowToast(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      setToastMessage('Registration failed. Please try again.');
      setToastVariant('danger');
      setShowToast(true);
      console.error('Registration failed', error);
    }
  };

  return (<>
    <div className={styles.RegisterContainer}>
      <h1 className={styles.Header}>Register</h1>
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
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label className={styles.FormLabel}></Form.Label>
          <Form.Control
            className={styles.FormControl}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
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
        <Form.Group controlId="formPassword2">
          <Form.Label className={styles.FormLabel}></Form.Label>
          <Form.Control
            className={styles.FormControl}
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Confirm password"
          />
        </Form.Group>
        <button type="submit" className={styles.Button}>
          Register
        </button>
      </Form>
    </div>
    <div>
      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className={toastVariant === 'success' ? 'text-success' : 'text-danger'}>
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
    </>);
};

export default Register;
