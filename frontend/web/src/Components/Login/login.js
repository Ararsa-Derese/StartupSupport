// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock login function (replace with actual authentication logic)
    const mockLogin = (email, password) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'user@example.com' && password === 'password') {
            resolve({ success: true });
          } else {
            reject({ success: false, message: 'Invalid credentials' });
          }
        }, 1000);
      });
    };

    try {
      const response = await mockLogin(email, password);
      if (response.success) {
        // Redirect to the home page or dashboard after successful login
        navigate('/home');
      }
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
