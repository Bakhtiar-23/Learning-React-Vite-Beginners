// src/App.jsx

import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import Hero from './pages/HomePage';  // Import the Hero component
import FeedbackForm from './components/community/FeedbackForm';
import RoutesComponent from './components/RoutesComponent';  // Import the new RoutesComponent

function App() {
  const location = useLocation();  // Get the current location

  return (
    <div className="app-container">
      <div className="glow-center"></div>
      <div className="content-wrapper">
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8"></div>
        <Header />
        {location.pathname === '/' && <Hero />}  {/* Only show Hero on homepage */}
        <RoutesComponent />
        <FeedbackForm />
        <Footer />
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
