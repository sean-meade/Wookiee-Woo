import React from 'react';
import EditProfile from '../../components/EditProfile';
import DeleteProfile from '../../components/DeleteProfile';

const ProfileDetails = () => {
  return (
    <div>
      <h1>Profile Detail Page</h1>
      <p>This is a placeholder for the profile detail page. It will display detailed information about the user.</p>
      <EditProfile />
      <DeleteProfile />
    </div>
  );
};

export default ProfileDetails;
