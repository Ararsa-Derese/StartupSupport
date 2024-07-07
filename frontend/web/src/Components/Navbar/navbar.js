import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../Assets/milkii1.png';

const Navbar = ({ isAuthenticated, onLogout, user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Update the authentication state in App.js
    navigate('/login'); // Redirect to login page after logout
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <div className="navbar-logo"></div>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About Us</Link>
        <Link to="/professionals" className="navbar-item">Professionals</Link>
        <Link to="/resources" className="navbar-item">Resources</Link>
        <Link to="/community" className="navbar-item">Community</Link>
        <Link to="/pricing" className="navbar-item">Pricing</Link>
        <Link to="/contactus" className="navbar-item">Contact Us</Link>
      </div>
      <div className="navbar-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
      </div>
      <div className="navbar-user-menu">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="navbar-item navbar-login">Login</Link>
            <Link to="/signup" className="navbar-item navbar-signup">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="navbar-item">
              {user && user.image ? (
                <img src={user.image} alt="User Avatar" className="navbar-user-avatar" />
              ) : (
                'Profile'
              )}
            </Link>
            <button onClick={handleLogout} className="navbar-item navbar-logout">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
