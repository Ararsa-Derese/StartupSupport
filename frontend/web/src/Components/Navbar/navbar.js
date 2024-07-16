import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../Assets/logo.png';
import menu from '../Assets/menu.png';

const Navbar = ({ isAuthenticated, userType, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <img src={menu} alt="Menu" className='menu'/>
      </button>
      {isAuthenticated ? (
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {userType === 'expert' ? (
            <>
             
              <Link to="/" className="navbar-item" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="navbar-item" onClick={closeMenu}>About Us</Link>
              <Link to="/professionals" className="navbar-item" onClick={closeMenu}>Professionals</Link>
              <Link to="/community" className="navbar-item" onClick={closeMenu}>Community</Link>
              <Link to="/contactus" className="navbar-item" onClick={closeMenu}>Contact Us</Link>
              <Link to="/events" className="navbar-item" onClick={closeMenu}>Events</Link>
              
            </>
          ) : (
            <>
              <Link to="/" className="navbar-item" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="navbar-item" onClick={closeMenu}>About Us</Link>
              <Link to="/professionals" className="navbar-item" onClick={closeMenu}>Professionals</Link>
              <Link to="/resources" className="navbar-item" onClick={closeMenu}>Resources</Link>
              <Link to="/community" className="navbar-item" onClick={closeMenu}>Community</Link>
              <Link to="/pricing" className="navbar-item" onClick={closeMenu}>Pricing</Link>
              <Link to="/contactus" className="navbar-item" onClick={closeMenu}>Contact Us</Link>
              <Link to="/events" className="navbar-item" onClick={closeMenu}>Events</Link>
            </>
          )}
          
        </div>
      ) : (
        
        <div className={`join-landing-page ${menuOpen ? 'active' : ''}`}>
          <Link to="/login" className="navbar-item navbar-login" onClick={closeMenu}>Login</Link>
          <Link to="/signup" className="navbar-item navbar-signup" onClick={closeMenu}>Sign Up</Link>
        </div>
      )}
     {isAuthenticated ? (<div className='profile-button'>
           <Link to={userType === 'expert' ? "/profile/expert" : "/profile/entrepreneur"} className="navbar-item" onClick={closeMenu}>Profile</Link>
            <button onClick={handleLogout} className="navbar-item navbar-logout">Logout</button>
            </div>):<></>}

    </nav>
  );
};

export default Navbar;