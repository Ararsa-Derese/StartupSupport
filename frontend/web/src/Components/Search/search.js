// pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './search.css'; // Import the CSS for styling

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // Get the search query from URL params
  const [results, setResults] = useState([]);

  // Sample data to search through - replace this with your actual data
  const sampleData = [
    { id: 1, title: 'Community Resources', description: 'Access various resources within the community.' },
    { id: 2, title: 'Business Strategies', description: 'Learn effective strategies to grow your business.' },
    { id: 3, title: 'Legal Advice', description: 'Get legal advice for your startup.' },
    { id: 4, title: 'Market Analysis', description: 'Understand market trends and insights.' },
    // Add more data as needed
  ];

  useEffect(() => {
    if (query) {
      const filteredResults = sampleData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="search-page">
      <h1>Search Results for "{query}"</h1>
      <div className="search-results">
        {results.length > 0 ? (
          results.map(item => (
            <div key={item.id} className="search-result">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
