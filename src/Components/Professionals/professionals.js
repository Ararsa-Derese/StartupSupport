// pages/ProfessionalsPage.js
import React, { useState } from 'react';
import './professionals.css'; // Import the CSS for styling
import professionalsData from './data'; // Mock data for professionals

const Professionals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredProfessionals = professionalsData.filter(professional => {
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || professional.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="professionals-page">
      <section className="search-filter">
        <input
          type="text"
          placeholder="Search professionals..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select value={filterCategory} onChange={handleFilterChange} className="filter-select">
          <option value="All">All Categories</option>
          <option value="Business Expert">Business Expert</option>
          <option value="Entrepreneur">Entrepreneur</option>
          <option value="Economist">Economist</option>
          <option value="Lawyer">Lawyer</option>
          <option value="Delala Professional">Delala Professional</option>
        </select>
      </section>

      <section className="professionals-grid">
        {filteredProfessionals.map(professional => (
          <div key={professional.id} className="professional-card">
            <img src={professional.image} alt={professional.name} className="professional-photo" />
            <h3>{professional.name}</h3>
            <p>{professional.category}</p>
            <p>{professional.description}</p>
            <button className="connect-button">Connect</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Professionals;
