import React, { useContext, useState } from 'react';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import AuthContext from '../auth/authcontext';
import authService from '../auth/auth';
import { useNavigate } from 'react-router-dom';

const DeleteProfile = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('danger');

  const handleDelete = async () => {
    try {
      await authService.deleteProfile(token);
      setToastMessage('Profile deleted successfully.');
      setToastVariant('success');
      setShowToast(true);
      logout();
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      setToastMessage('Failed to delete profile. Please try again.');
      setToastVariant('danger');
      setShowToast(true);
      console.error('Failed to delete profile', error);
    }
  };

  return (
    <>
      <Button variant="danger" onClick={handleDelete} className="mt-3">
        Delete Profile
      </Button>
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
    </>
  );
};

export default DeleteProfile;
