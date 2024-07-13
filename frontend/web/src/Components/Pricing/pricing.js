import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <section className="intro">
        <h1>Our Pricing Plans</h1>
        <p>Choose the plan that fits your needs and start collaborating today!</p>
      </section>
      <section className="pricing-tiers">
        <div className="tier">
          <h2>Basic</h2>
          <p className="price">free</p>
          <ul>
            <li>Access to basic features</li>
            <li>5 projects</li>
            <li>Email support</li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="tier">
          <h2>Pro</h2>
          <p className="price">$29/month</p>
          <ul>
            <li>Access to all features</li>
            <li>Unlimited projects</li>
            <li>Priority support</li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="tier">
          <h2>Premium</h2>
          <p className="price">$49/month</p>
          <ul>
            <li>Access to all features</li>
            <li>Unlimited projects</li>
            <li>Dedicated account manager</li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      <section className="features-comparison">
        <h2>Compare Features</h2>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic</th>
              <th>Pro</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access to all features</td>
              <td><span>&#10003;</span></td>
              <td><span>&#10003;</span></td>
              <td><span>&#10003;</span></td>
            </tr>
            <tr>
              <td>Number of projects</td>
              <td>5</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Priority support</td>
              <td></td>
              <td><span>&#10003;</span></td>
              <td><span>&#10003;</span></td>
            </tr>
            <tr>
              <td>Dedicated account manager</td>
              <td></td>
              <td></td>
              <td><span>&#10003;</span></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"This platform has significantly improved our team's productivity!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"The Pro plan is perfect for our needs. Highly recommend!"</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </section>
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className='faq-grid'>
          <div className="faq">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards and PayPal.</p>
          </div>
          <div className="faq">
            <h3>Can I cancel my subscription at any time?</h3>
            <p>Yes, you can cancel your subscription at any time through your account settings.</p>
          </div>
        </div>
      </section>
      <section className="contact-info">
        <h2>Need a Custom Plan?</h2>
        <p>Contact us at <a href="mailto:support@example.com">support@example.com</a> for custom plans and more information.</p>
      </section>
    </div>
  );
};

export default Pricing;
