import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth/authcontext';
import { Form, Button, Container, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import authService from '../auth/auth';
import styles from "../styles/EditProfile.module.css";
import "../global.css";

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('danger');
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await authService.getProfile(token);
        const { username, email, bio } = response.data;
        setUsername(username);
        setEmail(email);
        setBio(bio);
      } catch (error) {
        setToastMessage('Failed to load profile data.');
        setToastVariant('danger');
        setShowToast(true);
        console.error('Failed to load profile data', error);
      }
    };
    fetchProfile();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.updateProfile(token, { username, email, bio });
      setToastMessage('Profile updated successfully.');
      setToastVariant('success');
      setShowToast(true);
      setTimeout(() => {
        navigate('/'); 
      }, 1500);
    } catch (error) {
      setToastMessage('Failed to update profile. Please try again.');
      setToastVariant('danger');
      setShowToast(true);
      console.error('Failed to update profile', error);
    }
  };

  return (
    <Container className={styles.EditProfileContainer}>
          <h1 className={styles.Header}>Edit Profile</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
            <Form.Label className={styles.FormLabel}>Username</Form.Label>
              <Form.Control
                className={styles.FormControl}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </Form.Group>
            <hr/>
            <Form.Group controlId="formEmail">
              <Form.Label className={styles.FormLabel}>Email address</Form.Label>
              <Form.Control
                className={styles.FormControl}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
            <hr/>
            <Form.Group controlId="formBio">
              <Form.Label className={styles.FormLabel}>Bio</Form.Label>
              <Form.Control
                className={styles.FormControl}
                as="textarea"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Enter bio"
              />
            </Form.Group>
            <button type="submit" className={styles.Button}>
              Update Profile
            </button>
          </Form>
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

export default EditProfile;
