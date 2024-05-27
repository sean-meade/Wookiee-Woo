// src/components/Register.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth/authcontext';
import { Form, Button, Container, Row, Col, Toast, ToastContainer } from 'react-bootstrap';

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
        navigate('/sign-in');
      }, 3000);
    } catch (error) {
      setToastMessage('Registration failed. Please try again.');
      setToastVariant('danger');
      setShowToast(true);
      console.error('Registration failed', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1 className="text-center">Register</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group controlId="formPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Confirm password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
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
    </Container>
  );
};

export default Register;
