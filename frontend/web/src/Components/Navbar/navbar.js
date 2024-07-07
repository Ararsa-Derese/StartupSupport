import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../Assets/milkii8.png';
import menu from '../Assets/menu.png';

const Navbar = ({ isAuthenticated, onLogout, user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
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
          <div className="navbar-logo" style={{ backgroundImage: `url(${logo})` }}></div>
        </Link>
      </div>
      
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-item" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="navbar-item" onClick={closeMenu}>About Us</Link>
        <Link to="/professionals" className="navbar-item" onClick={closeMenu}>Professionals</Link>
        <Link to="/resources" className="navbar-item" onClick={closeMenu}>Resources</Link>
        <Link to="/community" className="navbar-item" onClick={closeMenu}>Community</Link>
        <Link to="/pricing" className="navbar-item" onClick={closeMenu}>Pricing</Link>
        <Link to="/contactus" className="navbar-item" onClick={closeMenu}>Contact Us</Link>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        <img src={menu} alt="Menu" className='menu'/>
      </button>
      
      <div className="navbar-search">
        <form onSubmit={handleSearch} className='navbar-search-content'>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">🔍</button>
        </form>
      </div>
      
      <div className="navbar-user-menu">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="navbar-item navbar-login" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="navbar-item navbar-signup" onClick={closeMenu}>Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="navbar-item" onClick={closeMenu}>
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
