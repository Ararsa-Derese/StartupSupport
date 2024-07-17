import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './signup.css'; // Import the CSS for styling
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/user.js';
import { Link, Navigate } from 'react-router-dom';
import Google from '../Assets/google-icon.png'
import Github from '../Assets/github-icon.png'


const Signup = ({ onSignup }) => {
  const [userType, setUserType] = useState('expert');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { registered, loading } = useSelector(state => state.user);
  const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      role: '', // Set the default value of role to "entrepreneur"
      field_of_expertise: '', // Correct the spelling here
  });


  const { first_name, last_name, role, field_of_expertise, email, password,confirm_password } = formData;

  const onChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
      e.preventDefault();
      if (!validateForm()) return;
      dispatch(register({ first_name, last_name, role, field_of_expertise, email, password }));
  };
const validateForm = () => {
    if (!email || !password || (userType === 'expert' && !field_of_expertise)) {
      setError('All fields are required.');
      return false;
    }
    return true;
  };

  if (registered) return <Navigate to="/login" />;

 

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
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
            <label htmlFor="first_name"></label>
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={onChange}
              required
              className="form-control"
              placeholder='First Name'
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="last_name"></label>
            <input
              type="text"
              name="last_name"
              value={last_name}
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
                onClick={() => {
                  setUserType('expert');
                  setFormData({ ...formData, role: 'expert' });
                }}
                className={`userType-btn ${userType === 'expert' ? 'active' : ''}`}
              >
                Expert
              </button>
              <button
                type="button"
                onClick={() => {
                  setUserType('entrepreneur');
                  setFormData({ ...formData, role: 'entrepreneur' });
                }}
                className={`userType-btn ${userType === 'entrepreneur' ? 'active' : ''}`} 
              >
                Entrepreneur
              </button>
            </div>

           

            {userType === 'expert' && (
            <div className="signup-form-group">
              <label htmlFor="field_of_expertise"></label>
              <input
                type="text"
                name="field_of_expertise"
                value={field_of_expertise}
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
            <label htmlFor="confirm_password"></label>
            <input
              type="password"
              name="confirm_password"
              value={confirm_password}
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