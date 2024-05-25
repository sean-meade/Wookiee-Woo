import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch('/frontend/profiles/')
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          setShowToast(true);
        } else {
          setProfiles(data);
        }
      })
      .catch(error => {
        console.error('Error fetching profiles:', error);
        setShowToast(true);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>User Profiles</h2>
      {profiles.length > 0 ? (
        <div className="row">
          {profiles.map(profile => (
            <div className="col-md-4" key={profile.id}>
              <div className="card mb-4">
                <img src={profile.profile_picture} className="card-img-top" alt={profile.user.username} />
                <div className="card-body">
                  <h5 className="card-title">{profile.user.username}</h5>
                  <p className="card-text">{profile.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No profiles available.</p>
      )}
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>No profiles available.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default ProfileList;
