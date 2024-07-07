// src/components/JoinNow.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './joinNow.css';

const JoinNow = () => {
  const navigate = useNavigate();

  const handleJoinNowClick = () => {
    navigate('/signup');
  };

  return (
    <div className="join-now-page">
      <div className="join-now-container">
        <h1>Join Our Community</h1>
        <p>Be a part of our growing community of professionals and enthusiasts. Sign up now to access exclusive resources, connect with industry experts, and more!</p>
        <div className="benefits-list">
          <h2>Why Join Us?</h2>
          <ul>
            <li>Access to a vast network of professionals.</li>
            <li>Exclusive content and resources.</li>
            <li>Opportunities to collaborate on projects.</li>
            <li>Regular updates and newsletters.</li>
            <li>Special events and webinars.</li>
          </ul>
        </div>
        <button onClick={handleJoinNowClick} className="join-now-submit">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default JoinNow;
