import React, { useState, useEffect } from 'react';
import './shareResources.css';

const ShareResources = () => {
  const [resourceName, setResourceName] = useState('');
  const [resourceDescription, setResourceDescription] = useState('');
  const [resourceCategory, setResourceCategory] = useState('');
  const [resourceFile, setResourceFile] = useState(null);
  // Initialize sharedResources from localStorage
  const [sharedResources, setSharedResources] = useState(() => {
    const savedResources = localStorage.getItem('sharedResources');
    return savedResources ? JSON.parse(savedResources) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Update localStorage whenever sharedResources changes
    localStorage.setItem('sharedResources', JSON.stringify(sharedResources));
  }, [sharedResources]);

  const handleFileChange = (e) => {
    setResourceFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!resourceName || !resourceDescription || !resourceCategory || !resourceFile) {
      setError('All fields are required.');
      return;
    }
    setLoading(true);

    // Simulating an API call
    setTimeout(() => {
      const newResource = {
        id: Date.now(),
        name: resourceName,
        description: resourceDescription,
        category: resourceCategory,
        fileName: resourceFile.name,
      };
      setSharedResources([...sharedResources, newResource]);
      setLoading(false);
      setResourceName('');
      setResourceDescription('');
      setResourceCategory('');
      setResourceFile(null);
    }, 1000);
  };

  return (
    <div className="share-resources-container">
      <h2>Share Resources</h2>
      <form className="share-resources-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="resourceName">Resource Name</label>
          <input
            type="text"
            id="resourceName"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
            placeholder="Resource Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resourceDescription">Resource Description</label>
          <textarea
            id="resourceDescription"
            value={resourceDescription}
            onChange={(e) => setResourceDescription(e.target.value)}
            placeholder="Resource Description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="resourceCategory">Category</label>
          <select
            id="resourceCategory"
            value={resourceCategory}
            onChange={(e) => setResourceCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="resourceFile">Upload File</label>
          <input
            type="file"
            id="resourceFile"
            onChange={handleFileChange}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Sharing...' : 'Share'}
        </button>
      </form>
      <div className="shared-resources-list">
        <h3>Shared Resources</h3>
        {sharedResources.length === 0 && <p>No resources shared yet.</p>}
        <ul>
          {sharedResources.map(resource => (
            <li key={resource.id}>
              <h4>{resource.name}</h4>
              <p>{resource.description}</p>
              <p><strong>Category:</strong> {resource.category}</p>
              <p><strong>File:</strong> {resource.fileName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShareResources;