// 404.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-description">
          Oops! It looks like this page has disappeared into the game void.
        </p>
        <Link to="/" className="notfound-button">
          🎮 Back to Game Radar
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
