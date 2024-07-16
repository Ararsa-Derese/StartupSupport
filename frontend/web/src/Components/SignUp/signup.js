import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Google from '../Assets/google-icon.png'
import Github from '../Assets/github-icon.png'
import './signup.css';

const Signup = ({ onSignup }) => {
  const [userType, setUserType] = useState('expert');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    expertise: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {fname, lname, email, password, confirmPassword, companyName, expertise } = formData;

  const onChange = e => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    if (!email || !password || (userType === 'entrepreneur' && !companyName) || (userType === 'expert' && !expertise)) {
      setError('All fields are required.');
      return false;
    }
    return true;
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      onSignup(userType, formData);
    } catch (error) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>{userType === 'expert' ? 'Expert Sign Up' : 'Entrepreneur Sign Up'}</h2>
        <form onSubmit={onSubmit}>
          
        <div className="signup-form-group">
            <button className='google-signup'><img src={Google} alt="google"/> <p>signup with google</p></button>
          </div>

        <div className="signup-form-group">
          <button className='github-signup'><img src={Github} alt="github"/> <p>signup with google</p></button>
        </div>

        <div class="hr-with-text">
          <hr />
          <span>or</span>
        </div>

        <div className="signup-form-group">
            <label htmlFor="FirstName"></label>
            <input
              type="text"
              name="FirstName"
              value={fname}
              onChange={onChange}
              required
              className="form-control"
              placeholder='First Name'
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="LastName"></label>
            <input
              type="text"
              name="LastName"
              value={lname}
              onChange={onChange}
              required
              className="form-control"
              placeholder='Last Name'
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              className="form-control"
              placeholder='Email'
            />
          </div>

          
          
          <div className="user-type-selection">
              <button
                type="button"
                onClick={() => setUserType('expert')}
                className={`userType-btn ${userType === 'expert' ? 'active' : ''}`}
              >
                Expert
              </button>
              <button
                type="button"
                onClick={() => setUserType('entrepreneur')}
                className={`userType-btn ${userType === 'entrepreneur' ? 'active' : ''}`} 
              >
                Entrepreneur
              </button>
            </div>

           

            {userType === 'expert' && (
            <div className="signup-form-group">
              <label htmlFor="expertise"></label>
              <input
                type="text"
                name="expertise"
                value={expertise}
                onChange={onChange}
                required
                className="form-control"
                placeholder='Area of Expertise'
              />
            </div>
          )}

          <div className="signup-form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              className="form-control"
              placeholder='password'
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="confirmPassword"></label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              required
              className="form-control"
              placeholder='confirm password'
              
            />
          </div>
          
          
          
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <p className='change-form-to-login'>
          Already have an account? <Link to="/login">Login</Link>
        </p>
       
      </div>
    </div>
  );
};

export default Signup;