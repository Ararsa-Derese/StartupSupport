// pages/PricingPage.js
import React from 'react';
import './pricing.css'; // Import the CSS for styling

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: 'Starter',
      price: '$19',
      frequency: 'per month',
      description: 'For individuals just getting started with basic needs.',
      features: [
        'Access to community resources',
        'Basic support',
        'Standard reporting tools'
      ],
      link: '#'
    },
    {
      id: 2,
      title: 'Pro',
      price: '$49',
      frequency: 'per month',
      description: 'For small teams needing advanced features.',
      features: [
        'Everything in Starter',
        'Priority support',
        'Advanced analytics',
        'Team collaboration tools'
      ],
      link: '#'
    },
    {
      id: 3,
      title: 'Enterprise',
      price: 'Contact Us',
      frequency: '',
      description: 'For large organizations with custom requirements.',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited users'
      ],
      link: '#'
    }
  ];

  return (
    <div className="pricing-page">
      <section className="intro">
        <h1>Our Pricing Plans</h1>
        <p>Choose the plan that fits your needs and scale your business with us.</p>
      </section>

      <section className="pricing-table">
        <div className="pricing-cards">
          {pricingPlans.map(plan => (
            <div key={plan.id} className="pricing-card">
              <h2 className="pricing-title">{plan.title}</h2>
              <div className="pricing-price">
                <span className="price">{plan.price}</span>
                <span className="frequency">{plan.frequency}</span>
              </div>
              <p className="pricing-description">{plan.description}</p>
              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href={plan.link} className="pricing-button">Get Started</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
