import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="name-container">
        <p>Delia Yichen Liu</p>
      </div>
      <nav className="nav">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/portfolio" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;