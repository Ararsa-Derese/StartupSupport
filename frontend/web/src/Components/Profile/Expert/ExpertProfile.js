import React, { useState, useEffect } from 'react';
import './ExpertProfile.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SharedResources from '../../Expert/ShareResources/SharedResources';
import SharedEvents from '../../Expert/Setup/SharedEvents';

const ExpertProfile = () => {
  
  const { user } = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [profile, setProfile] = useState({
    name: user?.name || 'Default Name',
    email: user?.email || 'default@example.com',
    bio: user?.bio || 'This is a default bio.',
  });
  
  
  const [verificationStatus, setVerificationStatus] = useState('Not Verified');

  useEffect(() => {
    setVerificationStatus('Verified');
  }, []);

 
  const handleEditToggle = () => setEditMode(!editMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    setEditMode(false);
  };

  const renderProfile = () => (
    <div className="profile-section">
      <h2>Welcome, {profile.name}</h2>
      <div className="profile-verification">
        <h3>Profile Verification: {verificationStatus}</h3>
      </div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            placeholder="Name"
            className='edit-name'
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            placeholder="Email"
            className='edit-email'
          />
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className='edit-bio'
          ></textarea>
          <button type="submit" className='edit-save'>Save</button>
        </form>
      ) : (
        <button onClick={handleEditToggle}>Edit Profile</button>
      )}
    </div>
  );

  const renderSharedResources = () => (
      
    <div className="shared-resources-section"> 
     <SharedResources/>
    </div>
  );

  const renderUpcomingEvents = () => (
    <SharedEvents/>
  );

  return (
    <div className="expert-profile-container">
      <div className="sidebar">
        <button onClick={() => setActiveSection('profile')}>Profile</button>
        <button onClick={() => setActiveSection('resources')}>Shared Resources</button>
        <button onClick={() => setActiveSection('events')}>Events</button>
      </div>
      <div className="profile-content">
        {activeSection === 'profile' && renderProfile()}
        {activeSection === 'resources' && renderSharedResources()}
        {activeSection === 'events' && renderUpcomingEvents()}
      </div>
    </div>
  );
};

export default ExpertProfile;
