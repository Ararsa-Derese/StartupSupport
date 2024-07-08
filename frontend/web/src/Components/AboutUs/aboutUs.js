// pages/AboutUsPage.js
import React from 'react';
import './aboutUs.css'; 
import { Link } from 'react-router-dom';
import overview from '../Assets/company-overview.jpg';
import member1 from '../Assets/team-member1.jpg';
import member2 from '../Assets/team-member2.jpg';
import member3 from '../Assets/team-member3.jpg';
import member4 from '../Assets/team-member4.jpg';
const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Company Overview Section */}
      <section className="company-overview">
        <div className="overview-content">
          <h1>About Us</h1>
          <p>
            We are dedicated to empowering entrepreneurs by connecting them with top-notch professionals who can provide invaluable guidance and support. Our platform brings together experts from diverse fields to help you start, sustain, and grow your business.
          </p>
        </div>
        <img src={overview} alt="Company Overview" className="overview-image" />
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a thriving ecosystem where entrepreneurs can access the resources and expertise they need to succeed. We believe in the power of community and collaboration to drive innovation and growth.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={member1} alt="Team Member 1" className="team-photo" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={member2} alt="Team Member 2" className="team-photo" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src={member3} alt="Team Member 3" className="team-photo" />
            <h3>Emily Johnson</h3>
            <p>Chief Marketing Officer</p>
          </div>
          <div className="team-member">
            <img src={member4} alt="Team Member 4" className="team-photo" />
            <h3>Michael Brown</h3>
            <p>Head of Product</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-about">
        <h2>Join Our Journey</h2>
        <p>
          We are always looking for passionate individuals to join our team. If you're interested in making an impact in the entrepreneurial world, get in touch with us today.
        </p>
        <a href="/contactus" className="cta-button-about no-underline">
        Contact Us
      </a>
      </section>
    </div>
  );
};

export default AboutUs;
