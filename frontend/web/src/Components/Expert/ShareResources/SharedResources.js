import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SharedResources.css';
import { Link } from 'react-router-dom';
const SharedResources = () => {
  const [fetchedResources, setFetchedResources] = useState([]);
  
  // Define static resources
  const staticResources = [
    { id: 'static-1', name: 'Static Resource 1', description: 'Description of Static Resource 1', category: 'Static Category 1', fileName: 'StaticFile1.pdf' },
    { id: 'static-2', name: 'Static Resource 2', description: 'Description of Static Resource 2', category: 'Static Category 2', fileName: 'StaticFile2.pdf' },
  ];

  useEffect(() => {
    // Simulated API call to fetch shared resources
    const storedResources = JSON.parse(localStorage.getItem('sharedResources')) || [];
    setFetchedResources(storedResources);
  }, []);

  return (
    <div className="shared-resources-display">
       <Link className="share-resources-btnn" to="/share-resources">Share More Resources</Link>
      <h2>Shared Resources</h2>
      <div className="resources-cards-container">
        {staticResources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h3>{resource.name}</h3>
            <p>{resource.description}</p>
            <p className="category">Category: {resource.category}</p>
            <p className="file-name">File: {resource.fileName}</p>
            <button className='resource-card-btn'><a href='#'>  Download</a></button>
          </div>
        ))}
        {fetchedResources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h3>{resource.name}</h3>
            <p>{resource.description}</p>
            <p className="category">Category: {resource.category}</p>
            <p className="file-name">File: {resource.fileName}</p>
            <button className='resource-card-btn'><a href='#'>  Download</a></button>
          </div>
        ))}
      </div>
    </div>
  );
};

SharedResources.propTypes = {
  sharedResources: PropTypes.array.isRequired,
};

export default SharedResources;