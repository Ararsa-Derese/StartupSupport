

import React from 'react';
import './footer.css'; 
import logo from '../Assets/milkii6.png';
import facebookIcon from '../Assets/facebook.png';
import twitterIcon from '../Assets/twitter.png';
import instagramIcon from '../Assets/instagram.png';
import linkedinIcon from '../Assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={logo} alt="Platform Logo" className="footer-logo" />
          <p className="footer-tagline">Connecting Entrepreneurs with Experts</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/professionals">Professionals</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to stay updated on our latest news and offers.</p>
          <form className="footer-newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email for newsletter subscription" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="icon-image" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" className="icon-image" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="icon-image" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="icon-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Milka. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
