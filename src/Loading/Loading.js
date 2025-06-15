import React from 'react';
import './Loading.css';

function LoadingScreen() {
  const text = "Loading your gaming experience...";

  // Split into words including spaces
  const words = text.split(' ');

  return (
    <div className="loading-screen">
      <div className="loading-text-container">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="word-span">
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className="loading-letter"
                style={{ animationDelay: `${(wordIndex * 6 + charIndex) * 0.05}s` }}
              >
                {char}
              </span>
            ))}
            {/* Add space between words */}
            <span className="loading-letter">&nbsp;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;
