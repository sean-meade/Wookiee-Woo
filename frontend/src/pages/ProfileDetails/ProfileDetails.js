import React from 'react';
import EditProfile from '../../components/EditProfile';
import DeleteProfile from '../../components/DeleteProfile';
import styles from "../../styles/ProfileDetails.module.css";
import "../../global.css";

const ProfileDetails = () => {
  return (
    <div className={styles.ProfileDetailsContainer}>
      <EditProfile />
      <DeleteProfile/>
    </div>
  );
};

export default ProfileDetails;
