// pages/ResourcesPage.js
import React from 'react';
import './resources.css'; // Import the CSS for styling

const Resources = () => {
  const articles = [
    { id: 1, title: '10 Tips for Effective Business Planning', link: '#', description: 'Learn how to plan your business with these 10 essential tips.' },
    { id: 2, title: 'The Ultimate Guide to Startup Funding', link: '#', description: 'Explore different funding options for your startup.' },
    { id: 3, title: 'Marketing Strategies for Small Businesses', link: '#', description: 'Discover effective marketing strategies to grow your business.' }
  ];

  const templates = [
    { id: 1, title: 'Business Plan Template', link: '#' },
    { id: 2, title: 'Financial Projection Template', link: '#' },
    { id: 3, title: 'Marketing Plan Template', link: '#' }
  ];

  const videos = [
    { id: 1, title: 'How to Start a Business', link: 'https://www.youtube.com/watch?v=somevideoid' },
    { id: 2, title: 'Pitching to Investors', link: 'https://www.youtube.com/watch?v=somevideoid' },
    { id: 3, title: 'Effective Marketing Techniques', link: 'https://www.youtube.com/watch?v=somevideoid' }
  ];

  const externalLinks = [
    { id: 1, title: 'Small Business Administration (SBA)', link: 'https://www.sba.gov/' },
    { id: 2, title: 'Entrepreneur Magazine', link: 'https://www.entrepreneur.com/' },
    { id: 3, title: 'Harvard Business Review', link: 'https://hbr.org/' }
  ];

  return (
    <div className="resources-page">
      <section className="intro">
        <h1>Resources for Entrepreneurs</h1>
        <p>Explore our curated list of resources to help you start, grow, and sustain your business.</p>
      </section>

      <section className="resource-section">
        <h2>Articles</h2>
        <div className="resources-list">
          {articles.map(article => (
            <div key={article.id} className="resource-card">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="resource-link">Read More</a>
            </div>
          ))}
        </div>
      </section>

      <section className="resource-section">
        <h2>Templates</h2>
        <div className="resources-list">
          {templates.map(template => (
            <div key={template.id} className="resource-card">
              <h3>{template.title}</h3>
              <a href={template.link} target="_blank" rel="noopener noreferrer" className="resource-link">Download</a>
            </div>
          ))}
        </div>
      </section>

      <section className="resource-section">
        <h2>Videos</h2>
        <div className="resources-list">
          {videos.map(video => (
            <div key={video.id} className="resource-card">
              <h3>{video.title}</h3>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="resource-link">Watch Now</a>
            </div>
          ))}
        </div>
      </section>

      <section className="resource-section">
        <h2>External Links</h2>
        <div className="resources-list">
          {externalLinks.map(link => (
            <div key={link.id} className="resource-card">
              <h3>{link.title}</h3>
              <a href={link.link} target="_blank" rel="noopener noreferrer" className="resource-link">Visit Site</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
