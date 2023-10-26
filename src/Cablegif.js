import React from 'react';
import GifContainer from './GifContainer';
import cablegif from './cable.gif'; // Replace with your GIF file path

function Cablegif() {
  return (
    <div className="Cablegif">
      <GifContainer
        gifUrl={cablegif}
        heading="DELTA COMMUNICATION"
        paragraph="SPEED LIKE NEVER BEFORE TAKING YOUR SURFING EXPERIENCE TO A WHOLE NEW LEVEL"
      />
    </div>
  );
}

export default Cablegif;
