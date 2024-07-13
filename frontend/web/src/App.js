import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import GetStarted from './Components/GetStarted/getStarted';
import Profile from './Components/Profile/profile';
import JoinNow from './Components/JoinNow/joinNow';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import { checkAuth } from './features/user';
import './index.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

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
    <Router>
      <ScrollToTop />
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;