import React from 'react';
import '@styles/App.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/mission" className="hover:text-indigo-600">Our Mission</a></li>
            <li><a href="/methodology" className="hover:text-indigo-600">Teaching Methodology</a></li>
            <li><a href="/team" className="hover:text-indigo-600">Meet the Team</a></li>
            <li><a href="/success-stories" className="hover:text-indigo-600">Success Stories</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About the Course</h4>
          <ul>
            <li><a href="/intro">Introduction</a></li>
            <li><a href="/">Lessons</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li><a>Email: info@learn-react.vite.com</a></li>
            <li><a>Phone: +358409326961</a></li>
            <li><a>Address: Keskusta 20100, Turku, Finland </a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <h5>© 2025 React + Vite Learning Platform | All rights reserved.</h5>
        <h3>We're passionate about teaching modern web development using React and Vite.</h3>
      </div>
    </footer>
  );
}
