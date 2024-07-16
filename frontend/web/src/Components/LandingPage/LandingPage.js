import React from 'react';
import { Link } from 'react-router-dom';
import missionImage1 from '../Assets/mission1.jpg'; // Add paths to your images
import missionImage2 from '../Assets/mission2.jpg';
import missionImage3 from '../Assets/mission3.jpg';
import './LandingPage.css'; // Make sure you have the appropriate styles in your CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className='landing-page-header'>
        <div className="landing-page-header-text">
            <h1>Welcome to Milka Startup Support</h1>
            <p>Your journey to success begins here.</p>
            <Link to="/signup" className="landing-getting-started-btn">Get Started</Link>
        </div>
      </header>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>Milka Startup Support is dedicated to empowering startups by providing comprehensive support, resources, and expert guidance. Our goal is to nurture innovative ideas into successful businesses.</p>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <img src={missionImage1} alt="Mission 1" />
            <h3>Empowering Startups</h3>
            <p>We empower startups by providing essential tools and resources to kickstart their journey.</p>
          </div>
          <div className="mission-card">
            <img src={missionImage2} alt="Mission 2" />
            <h3>Creating a Thriving Ecosystem</h3>
            <p>Our goal is to build a supportive ecosystem where startups can thrive and succeed.</p>
          </div>
          <div className="mission-card">
            <img src={missionImage3} alt="Mission 3" />
            <h3>Connecting Innovators</h3>
            <p>We connect innovators with industry leaders and investors to foster growth and innovation.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-items">
          <div className="service-item">
            <h3>Consulting</h3>
            <p>Expert advice to guide you through every stage of your startup journey.</p>
          </div>
          <div className="service-item">
            <h3>Networking</h3>
            <p>Connect with other entrepreneurs, investors, and industry leaders.</p>
          </div>
          <div className="service-item">
            <h3>Resources</h3>
            <p>Access to tools, templates, and guides to accelerate your growth.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>“Milka Startup Support has been instrumental in our growth. The insights and connections we've gained have been invaluable.” - Startup Founder</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to Take Your Startup to the Next Level?</h2>
        <Link to="/contactus" className="btn btn-primary">Contact Us</Link>
      </section>
    </div>
  );
};

export default LandingPage;
