import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../signup.css';

const ExpertSignup = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    expertise: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { email, password, confirmPassword, expertise } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (email && password && expertise) {
        setIsAuthenticated(true);
        onSignup('expert');
      } else {
        setError('Signup failed. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Expert Sign Up</h2>
        <form className="mt-5" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expertise">Area of Expertise</label>
            <input
              type="text"
              name="expertise"
              value={expertise}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ExpertSignup;
