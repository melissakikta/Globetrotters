// Import navbar style sheet
import '../styles/Navbar.css';
import React from 'react';
import {NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <h2>Home</h2>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Exchange" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <h2>Exchange Rates</h2>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Bucketlist" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <h2>Bucket List</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;