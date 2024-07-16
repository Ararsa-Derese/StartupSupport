import React from 'react';
import '../Home/home.css'; 
import mentorship from '../Assets/mentorship.jpg'; 
import events from '../Assets/events.jpg'; 
import network from '../Assets/network.jpg'; 

import { Link } from 'react-router-dom';

const ExpertHomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Expert Hub</h1>
          <p>Empower others with your expertise and expand your professional reach.</p>
          <Link to="/getStarted" className="cta-button">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <Link to="/events" className="feature-card">
            <img src={mentorship} alt="Mentorship" />
            <h3>Host and Attend Events</h3>
            <p>Create and join webinars, workshops, and networking events.</p>
            
          </Link>
          
          <Link to='/share-resources' className="feature-card">
            <img src={events} alt="Events" />
             <h3>Share Resources</h3>
          <p>Share your knowledge and guide budding entrepreneurs.</p>
          </Link>

          <Link to="/network" className="feature-card">
            <img src={network} alt="Network" />
            <h3>Thriving Community</h3>
            <p>Connect with like-minded professionals and grow your influence.</p>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Experts Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>“This platform has allowed me to share my expertise and connect with incredible entrepreneurs.”</p>
            <h4>— Dr. Emily Green, Business Consultant</h4>
          </div>
          <div className="testimonial-card">
            <p>“The events and networking opportunities have been fantastic for my professional growth.”</p>
            <h4>— Alex Johnson, Marketing Specialist</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Make a Difference?</h2>
        <Link to="/join" className="cta-button">Join Now</Link>
      </section>
    </div>
  );
};

export default ExpertHomePage;
