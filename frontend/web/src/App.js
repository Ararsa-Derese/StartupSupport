import React, { useState } from 'react';
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
import ExpertSignup from './Components/SignUp/Expert/ExpertSignup';
import EntrepreneurSignup from './Components/SignUp/Entrepreneur/EntrepreneurSignup';
import GetStarted from './Components/GetStarted/getStarted';
import ExpertProfile from './Components/Profile/Expert/ExpertProfile';
import EntrepreneurProfile from './Components/Profile/Entrepreneur/EntrepreneurProfile';
import ShareResources from './Components/Expert/ShareResources/shareResources';
import SetupEvent from './Components/Expert/Setup/SetupEvent';
import JoinNow from './Components/JoinNow/joinNow';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Events from './Components/Expert/Events/Events';
import ExpertHome from './Components/ExpertHome/ExpertHome';
import LandingPage from './Components/LandingPage/LandingPage';
import './index.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(''); // 'expert' or 'entrepreneur'

  const handleLogin = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const handleSignup = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType('');
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar isAuthenticated={isAuthenticated} userType={userType} onLogout={handleLogout} />
      <div className="content">
        <Routes>
          
          <Route path="/" element={isAuthenticated ? (userType === 'expert' ? <ExpertHome /> : <Home />) : <LandingPage />} />
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
          <Route path="/signup" element={!isAuthenticated ? <Signup onSignup={handleSignup} /> : <Navigate to="/" replace />} />
          <Route path="/signup/expert" element={<ExpertSignup onSignup={handleSignup} />} />
          <Route path="/signup/entrepreneur" element={<EntrepreneurSignup onSignup={handleSignup} />} />
          <Route path="/profile/expert" element={isAuthenticated && userType === 'expert' ? <ExpertProfile /> : <Navigate to="/login" replace />} />
          <Route path="/profile/entrepreneur" element={isAuthenticated && userType === 'entrepreneur' ? <EntrepreneurProfile /> : <Navigate to="/login" replace />} />
          <Route path="/share-resources" element={isAuthenticated && userType === 'expert' ? <ShareResources /> : <Navigate to="/login" replace />} />
          <Route path="/setup-event" element={isAuthenticated && userType === 'expert' ? <SetupEvent /> : <Navigate to="/login" replace />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;