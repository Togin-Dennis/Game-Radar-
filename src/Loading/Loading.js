import React from 'react';
import './Loading.css';

function LoadingScreen() {

console.log('load')

  
  const text = "Loading your gaming experience...";
  
  return (
    <div className="loading-screen">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="loading-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

export default LoadingScreen;
