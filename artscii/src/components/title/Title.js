import React from 'react';
import './Title.css';

const Title = ({ asciiArt }) => {
  return (
    <pre className="title">
      {asciiArt}
    </pre>
  );
};

export default Title;
