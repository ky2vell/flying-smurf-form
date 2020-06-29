import React from 'react';

const RandomSmurf = ({ name }) => {
  return (
    <div className='smurf'>
      <div className='speech-bubble'>
        <span>Hi! I'm {name}</span>
      </div>
      <img src='/images/smurf.png' alt='smurf' />
    </div>
  );
};

export default RandomSmurf;
