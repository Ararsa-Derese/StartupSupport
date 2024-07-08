// Profile.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = ({ onLogout }) => {
  // Example user data (replace with actual user data from context or backend)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Entrepreneur passionate about technology and innovation.',
    role: 'Founder',
    company: 'Tech Startup X',
    location: 'San Francisco, CA',
    image: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing auth tokens, session, etc.)
    onLogout(); // Call the onLogout prop to update the isAuthenticated state in App.js
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src={user.image} alt="User Avatar" className="avatar-img" />
        </div>
        <div className="profile-details">
          <h3>{user.name}</h3>
          <p>{user.role} at {user.company}</p>
          <p>{user.location}</p>
          <p>{user.bio}</p>
          <p>Email: {user.email}</p>
          {/* Add more profile details as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
