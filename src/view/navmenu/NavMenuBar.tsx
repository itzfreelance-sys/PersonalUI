import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenuBar.css';

const NavMenuBar = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-list">
      <li className="nav-menu-item">
          <Link to="/" className="nav-menu-link">Home</Link>
        </li>
        <li className="nav-menu-item">
          <Link to="/registration" className="nav-menu-link">Registration</Link>
        </li>
        
        <li className="nav-menu-item">
          <Link to="/login" className="nav-menu-link">Login</Link>
        </li>
      </ul>
    </nav>
    
  );
};

export default NavMenuBar;
