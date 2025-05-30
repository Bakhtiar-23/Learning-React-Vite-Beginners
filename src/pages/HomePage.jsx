import React from 'react';
import heroImage from '../assets/hero.jpg';
import '@styles/App.css';

export default function Hero() {
  return (
    <div className="hero-container">
        <p>We're passionate about teaching modern web development using React and Vite.</p>
      <img src={heroImage} alt="Hero" className="hero-image" />
      <p className="hero-text">
        <p>Welcome to the React + Vite Learning Platform for Beginners!</p><br />
        Dive into a hands-on journey where you'll learn how to build fast, modern web applications using React and Vite.
        Whether you're just starting out or brushing up your skills, this platform offers interactive lessons, real-world
        challenges, and quizzes to help you grow confidently as a frontend developer.
      </p>
    </div>
  );
}
