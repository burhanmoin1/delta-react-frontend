import React from 'react';
import './GifContainer.css';

function GifContainer({ gifUrl, heading, paragraph }) {
  return (
    <div className="gif-container" style={{ backgroundImage: `url(${gifUrl})` }}>
      <div className="content">
        <h2 className='gifh2'>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default GifContainer;
