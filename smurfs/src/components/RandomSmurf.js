import React from 'react';

import KillSmurf from './KillSmurf';

const RandomSmurf = ({ name, id }) => {
  return (
    <div
      className='smurf'
      style={{
        left: Math.random() * (window.innerWidth - 120).toFixed(),
        top: Math.random() * (window.innerHeight - 190).toFixed()
      }}
    >
      <div className='speech-bubble'>
        <span>Hi! I'm {name}</span>
      </div>
      <img src='/images/smurf.png' alt='smurf' />
      <KillSmurf id={id} />
    </div>
  );
};

export default RandomSmurf;
