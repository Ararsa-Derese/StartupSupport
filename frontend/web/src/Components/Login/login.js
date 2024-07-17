import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetRegistered, login } from '../../features/user.js';
import './login.css';
import Google from '../Assets/google-icon.png';
import Github from '../Assets/github-icon.png'


const LoginPage = () => {
  const dispatch = useDispatch();
	const { loading, isAuthenticated, registered } = useSelector(
		state => state.user
	);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
  const [error, setError] = useState('');
  useEffect(() => {
		if (registered) dispatch(resetRegistered());
	}, [registered]);

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
		e.preventDefault();

		dispatch(login({ email, password }));
	};
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form className='mt-5' onSubmit={onSubmit}>


        <div className="login-form-group">
            <button className='google-signup'><img src={Google} alt="google"/> <p>signup with google</p></button>
          </div>

        <div className="login-form-group">
          <button className='github-signup'><img src={Github} alt="github"/> <p>signup with google</p></button>
        </div>

        <div class="hr-with-text">
          <hr />
          <span>or</span>
        </div>



        <div className="login-form-group">
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

          <div className="login-form-group">
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
          <p className='other-option'> 
              <Link>Forget Password</Link>
              <Link to='/signup'>Sign Up</Link> 
           </p>
          {error && <div className='alert alert-danger mt-3'>{error}</div>}
          <button type='submit' className='login-button' disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;
