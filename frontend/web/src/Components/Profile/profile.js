// Profile.js
import React from 'react';
import {  Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './profile.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user';
const Profile = ({ onLogout }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading } = useSelector(state => state.user);

	if (!isAuthenticated && !loading && user === null)
		return <Navigate to='/signup' />;
  // Example profile data (replace with actual profile data from context or backend)
  const profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Entrepreneur passionate about technology and innovation.',
    role: 'Founder',
    company: 'Tech Startup X',
    location: 'San Francisco, CA',
    image: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <button onClick={() => dispatch(logout())} className="logout-button">
          Logout
        </button>
      </div>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src={profile.image} alt="profile Avatar" className="avatar-img" />
        </div>
        <div className="profile-details">
          <h3>{profile.name}</h3>
          <p>{profile.role} at {profile.company}</p>
          <p>{profile.location}</p>
          <p>{profile.bio}</p>
          <p>Email: {profile.email}</p>
          {/* Add more profile details as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
