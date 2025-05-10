import React from 'react';
import '@styles/App.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We're passionate about teaching modern web development using React and Vite.</p>
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
          <p>Email: info@learn-react.vite.com</p>
          <p>Phone: +358409326961</p>
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
        <p>© 2025 React + Vite Learning Platform | All rights reserved.</p>
      </div>
    </footer>
  );
}
