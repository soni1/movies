import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img className="tmdb-logo" src="./images/tmdb-logo.png" alt="tmdb-logo" />
        <h1 className="header-heading">The Movie App</h1>
      </div>
    </div>
  )
}

export default Header;