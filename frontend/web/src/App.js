// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer'; 
import Home from './Components/Home/home';
import AboutUs from './Components/AboutUs/aboutUs';
import Professionals from './Components/Professionals/professionals';
import Community from './Components/Community/community';
import Resources from './Components/Resources/resources';
import Pricing from './Components/Pricing/pricing';
import Search from './Components/Search/search'; 
import Login from './Components/Login/login'; 
import Signup from './Components/SignUp/signup'; 
import {store} from './strore';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div className="content"> {/* Add a wrapper div with the content class */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
};

export default App;
