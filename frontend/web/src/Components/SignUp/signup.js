// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';
import {userSelector, useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from '../../features/user.js';
const RegisterPage = () => {
	const dispatch = useDispatch();
	const { registered, loading } = useSelector(state => state.user);

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

	const { first_name, last_name, email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		dispatch(register({ first_name, last_name, email, password }));
	};

	if (registered) return <Navigate to='/login' />;


  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form className='mt-5' onSubmit={onSubmit}>
				<div className='form-group'>
					<label className='form-label' htmlFor='first_name'>
						First Name
					</label>
					<input
						className='form-control'
						type='text'
						name='first_name'
						onChange={onChange}
						value={first_name}
						required
					/>
				</div>
				<div className='form-group mt-3'>
					<label className='form-label' htmlFor='last_name'>
						Last Name
					</label>
					<input
						className='form-control'
						type='text'
						name='last_name'
						onChange={onChange}
						value={last_name}
						required
					/>
				</div>
				<div className='form-group mt-3'>
					<label className='form-label' htmlFor='email'>
						Email
					</label>
					<input
						className='form-control'
						type='email'
						name='email'
						onChange={onChange}
						value={email}
						required
					/>
				</div>
				<div className='form-group mt-3'>
					<label className='form-label' htmlFor='password'>
						Password
					</label>
					<input
						className='form-control'
						type='password'
						name='password'
						onChange={onChange}
						value={password}
						required
					/>
				</div>
				{loading ? (
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : (
					<button type="submit" className="signup-button">
					Sign Up
				  </button>
				)}
			</form>
        <div className="signup-links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
