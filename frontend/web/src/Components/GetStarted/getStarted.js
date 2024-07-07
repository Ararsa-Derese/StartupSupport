import React from 'react';
import './getStarted.css'; // Import CSS for styling

const GetStarted = () => {
  return (
    <div className="new-get-started">
      {/* Hero Section */}
      <div className="new-hero">
        <div className="new-hero-overlay">
          <h1>Begin Your Journey</h1>
          <p>Take the first step towards your goals with our platform.</p>
          <a href="#new-features" className="new-cta-button">Learn More</a>
        </div>
      </div>

      {/* Features Section */}
      <div className="new-features" id="new-features">
        <h2>How to Get Started</h2>
        <div className="new-feature-cards">
          <div className="new-feature-card">
            <h3>Create Your Profile</h3>
            <p>Sign up and personalize your profile to fit your needs.</p>
          </div>
          <div className="new-feature-card">
            <h3>Explore Services</h3>
            <p>Browse and connect with professionals and resources.</p>
          </div>
          <div className="new-feature-card">
            <h3>Achieve Your Goals</h3>
            <p>Utilize our tools and community to reach your objectives.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="new-cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Sign up today and embark on a new adventure with us!</p>
        <a href="/signup" className="new-cta-button">Sign Up Now</a>
      </div>
    </div>
  );
};

export default GetStarted;