import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavBar() {
  return (
    <nav className="main-nav">
      <Link to="/" className="nav-logo-text">
        Bootcamp DevSuperior
      </Link>
    </nav>
  );
}

export default NavBar;