// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer'; 
import Home from './Components/Home/home';
import AboutUs from './Components/AboutUs/aboutUs';
import Professionals from './Components/Professionals/professionals';
import Community from './Components/Community/community';
import Resources from './Components/Resources/resources';
import Pricing from './Components/Pricing/pricing';
import ContactUs from './Components/ContactUs/contactus';
import Search from './Components/Search/search'; 
import Login from './Components/Login/login'; 
import Signup from './Components/SignUp/signup'; 

import {store} from './strore';

import GetStarted from './Components/GetStarted/getStarted';
import Profile from './Components/Profile/profile';
import JoinNow from './Components/JoinNow/joinNow';
import './index.css'; 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Provider store={store}>
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} /> {/* Pass onLogout to Navbar */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/join" element={<JoinNow />} />
          <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" replace />} />
          <Route path="/signup" element={!isAuthenticated ? <Signup onSignup={handleSignup} /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={isAuthenticated ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
};

export default App;
