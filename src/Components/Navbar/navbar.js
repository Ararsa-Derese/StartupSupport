// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'; // CSS for Navbar styling
import logo from '../Assets/logo.png'; // Import the logo image

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
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
          <img src={logo} alt="Platform Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/about" className="navbar-item">
          About Us
        </Link>
        <Link to="/professionals" className="navbar-item">
          Professionals
        </Link>
        <Link to="/resources" className="navbar-item">
          Resources
        </Link>
        <Link to="/community" className="navbar-item">
          Community
        </Link>
        <Link to="/pricing" className="navbar-item">
          Pricing
        </Link>
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
        <Link to="/login" className="navbar-item navbar-login">
          Login
        </Link>
        <Link to="/signup" className="navbar-item navbar-signup">
          Sign Up
        </Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
