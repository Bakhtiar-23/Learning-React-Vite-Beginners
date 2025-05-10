import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '@styles/App.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="main-title">Learning React</h1>
      <nav className="nav-buttons">
        <Link to="/" aria-label="HomePage">
          <button className="nav-button">HomePage</button>
        </Link>
        <Link to="/practicing-challenging" aria-label="Practicing & Challenging">
          <button className="nav-button">Practicing & Challenging</button>
        </Link>
        <Link to="/gamifying" aria-label="Gamifying">
          <button className="nav-button">Gamifying</button>
        </Link>
        <Link to="/forum" aria-label="Forum">
          <button className="nav-button">Forum</button>
        </Link>
        <Link to="/quizzes" aria-label="General Quizzes">
          <button className="nav-button">General Quizzes</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
