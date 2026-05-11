import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Agile <span>TaskTracker</span></h1>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/create" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Nova Tarefa
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
