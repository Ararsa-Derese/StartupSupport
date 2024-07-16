import React from 'react';
import './ExpertProfile.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpertProfile = () => {
  const { user } = useSelector(state => state.user);

  return (
    <div>
      <h2>Expert Profile</h2>
      <div>
        <h3>Upcoming Events</h3>
        {/* List of events */}
      </div>
      <div>
        <h3>Profile Verification</h3>
        {/* Verification details */}
      </div>
      <div>
        <h3>Edit Profile</h3>
        {/* Profile editing form */}
      </div>
      <div>
        <Link to="/share-resources">Share Resources</Link>
        <Link to="/setup-event">Setup Event</Link>
      </div>
    </div>
  );
};

export default ExpertProfile;
