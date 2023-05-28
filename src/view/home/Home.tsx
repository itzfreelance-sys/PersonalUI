import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to our Website!</h1>
        <p className="welcome-description">Discover amazing features and explore our services.</p>
        <button className="welcome-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
