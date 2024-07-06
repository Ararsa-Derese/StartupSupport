
import React from 'react';
import './home.css'; 
import hero from '../Assets/hero-bg.jpg'; 
import expertise from '../Assets/expertise.jpg'; 
import resources from '../Assets/resources.jpg'; 
import community from '../Assets/community.jpg'; 



const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Entrepreneurial Journey</h1>
          <p>Connecting you with professionals to guide your business growth.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={expertise} alt="Expertise" />
            <h3>Expertise on Demand</h3>
            <p>Access top professionals across various fields.</p>
          </div>
          <div className="feature-card">
            <img src={resources} alt="Resources" />
            <h3>Vast Resources</h3>
            <p>Leverage articles, webinars, and tools to accelerate your growth.</p>
          </div>
          <div className="feature-card">
            <img src={community} alt="Community" />
            <h3>Thriving Community</h3>
            <p>Engage with fellow entrepreneurs and experts in our forums.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>“This platform has been a game-changer for my startup. The guidance and resources are unparalleled.”</p>
            <h4>— Jane Doe, Startup Founder</h4>
          </div>
          <div className="testimonial-card">
            <p>“Connecting with industry experts has never been easier. It’s like having a mentor on demand.”</p>
            <h4>— John Smith, Small Business Owner</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Take Your Business to the Next Level?</h2>
        <button className="cta-button">Join Now</button>
      </section>
    </div>
  );
};

export default Home;
